import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getEntities,
  getLoading,
  getUpdFollowers,
} from '../../redux/selectors';
import * as operations from '../../redux/operations';
import UsersItem from '../UsersItem/UsersItem';
import Loader from '../Loader/Loader';
import Dropdown from '../Dropdown/Dropdown';
import s from './Users.module.css';

export default function Users() {
  const users = useSelector(getEntities);
  const isLoading = useSelector(getLoading);
  const isUpdFollowers = useSelector(getUpdFollowers);
  const dispatch = useDispatch();

  const [followedUsers, setIsFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) || [],
  );
  const [page, setPage] = useState(1);
  const [filteredTweets, setFilteredTweets] = useState(users);
  const [selectedFilter, setSelectedFilter] = useState('show all');

  useEffect(() => {
    setIsFollowedUsers(JSON.parse(localStorage.getItem('followedUsers')) || []);
  }, [isUpdFollowers]);

  const handleLoadMore = () => {
    dispatch(operations.fetchUsers(page + 1));
    setPage(page + 1);
  };

  const filterTweets = useCallback(
    filter => {
      switch (filter) {
        case 'follow':
          setFilteredTweets(
            users.filter(user => !followedUsers.includes(user.id)),
          );
          break;

        case 'followings':
          setFilteredTweets(
            users.filter(user => followedUsers.includes(user.id)),
          );
          break;

        default:
          setFilteredTweets(users);
          break;
      }
    },
    [users, followedUsers],
  );

  useEffect(() => {
    filterTweets(selectedFilter);
  }, [selectedFilter, users, filterTweets]);

  return (
    <>
      <Link to="/" className={s.back_home_btn}>
        &#8602; Back home
      </Link>

      <Dropdown filterTweets={setSelectedFilter} />

      {filteredTweets.length && (
        <ul className={s.users__list}>
          {filteredTweets.map(user => (
            <li key={user.user}>
              <UsersItem userData={user} followedUsers={followedUsers} />
            </li>
          ))}
        </ul>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <button
          className={s.load_more_btn}
          type="button"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </>
  );
}

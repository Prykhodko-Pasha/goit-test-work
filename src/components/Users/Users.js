import { useSelector } from 'react-redux';
import s from './Users.module.css';
import UsersItem from '../UsersItem/UsersItem';
import { getEntities, getUpdFollowers } from '../../redux/selectors';
import { useEffect, useState } from 'react';

export default function Users() {
  const users = useSelector(getEntities);
  const isUpdFollowers = useSelector(getUpdFollowers);
  const [followedUsers, setIsFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) || [],
  );

  useEffect(() => {
    setIsFollowedUsers(JSON.parse(localStorage.getItem('followedUsers')) || []);
  }, [isUpdFollowers]);

  return (
    <ul className={s.users__list}>
      {users.map(user => (
        <li key={user.user}>
          <UsersItem userData={user} followedUsers={followedUsers} />
        </li>
      ))}
    </ul>
  );
}

import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import s from '../Users/Users.module.css';
import goit_logo from '../../assets/goit_logo.svg';
import card_picture from '../../assets/picture.png';
import { useState } from 'react';
import * as operations from '../../redux/operations';

export default function UsersItem({ userData, followedUsers }) {
  const { id, user, tweets, followers, avatar } = userData;
  const dispatch = useDispatch();

  const [followersCount, setIsFollowersCount] = useState(followers);
  const [isFollowed, setIsFollowed] = useState(followedUsers.includes(id));

  const btnClickHandler = () => {
    if (isFollowed) {
      setIsFollowed(false);
      setIsFollowersCount(followersCount - 1);
      localStorage.setItem(
        'followedUsers',
        JSON.stringify(followedUsers.filter(userId => userId !== id)),
      );
      dispatch(
        operations.updUser({ ...userData, followers: followersCount - 1 }),
      );
    } else {
      setIsFollowed(true);
      setIsFollowersCount(followersCount + 1);
      const newFollowedUsers = [...followedUsers, id];
      localStorage.setItem('followedUsers', JSON.stringify(newFollowedUsers));
      dispatch(
        operations.updUser({ ...userData, followers: followersCount + 1 }),
      );
    }
  };

  return (
    <div className={s.user_card}>
      <img className={s.user_card__logo} src={goit_logo} alt="goit_logo" />

      <img
        className={s.user_card__picture}
        src={card_picture}
        alt="card_picture"
      />

      <div className={s.user_card__divider}>
        <div className={s.user_card__circle}>
          <img
            src={avatar}
            alt={`avatar-${user}`}
            className={s.user_card__avatar}
          />
        </div>
      </div>

      <p className={`${s.user_card__info} ${s.user_card__tweets}`}>
        {tweets.toLocaleString()} tweets
      </p>
      <p className={`${s.user_card__info} ${s.user_card__followers}`}>
        {followersCount.toLocaleString()} followers
      </p>

      <button
        className={`${s.user_card__btn} ${
          isFollowed && s.user_card__btn__followed
        }`}
        type="button"
        onClick={btnClickHandler}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

// UsersItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

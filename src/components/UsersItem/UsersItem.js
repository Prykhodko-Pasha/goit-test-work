// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import s from '../Users/Users.module.css';
// import * as operations from '../../redux/operations';

export default function UsersItem({ id, user, tweets, followers, avatar }) {
  // const dispatch = useDispatch();

  return (
    <>
      <img src={avatar} alt={`avatar-${id}`} />
      <p>
        {user}: {tweets} : {followers}
      </p>
      <button
        className={s.del__btn}
        type="button"
        // onClick={() => dispatch(operations.delUser(id))}
      >
        Delete
      </button>
    </>
  );
}

// UsersItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

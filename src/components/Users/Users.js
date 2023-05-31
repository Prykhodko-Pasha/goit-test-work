import { useSelector } from 'react-redux';
import s from './Users.module.css';
import UsersItem from '../UsersItem/UsersItem';
import { getEntities } from '../../redux/selectors';

export default function Users() {
  const users = useSelector(getEntities);

  return (
    <ul className={s.users__list}>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <li key={id} className={s.users__item}>
          <UsersItem
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        </li>
      ))}
    </ul>
  );
}

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Section from './Section/Section';
// import Form from './Form/Form';
import Users from './Users/Users';
// import UsersSearch from './usersSearch/usersSearch';
import Loader from './Loader/Loader';
import s from './Users/Users.module.css';
import { getEntities, getLoading } from '../redux/selectors';
import * as operations from '../redux/operations';

export default function Phonebook() {
  const items = useSelector(getEntities);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchUsers()), [dispatch]);

  return (
    <>
      {/* <Section title="Phonebook">
        <Form />
      </Section> */}
      <Section title="Users">
        {isLoading ? (
          <Loader />
        ) : items.length > 0 ? (
          <>
            {/* {items.length > 1 && <UsersSearch />} */}
            <Users />
          </>
        ) : (
          <div className={s.wrapper}>
            <p className={s.text}>No users yet</p>
          </div>
        )}
      </Section>
    </>
  );
}

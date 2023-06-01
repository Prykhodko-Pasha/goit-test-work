import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Users from './Users/Users';
import Loader from './Loader/Loader';
import { getLoading } from '../redux/selectors';
import * as operations from '../redux/operations';

export default function Phonebook() {
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchUsers()), [dispatch]);

  return <>{isLoading ? <Loader /> : <Users />}</>;
}

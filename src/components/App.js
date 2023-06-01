import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/operations';
import { Route, Navigate, Routes } from 'react-router-dom';
import Users from './Users/Users';
import Home from './Home/Home';

export default function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchUsers()), [dispatch]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tweets" element={<Users />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

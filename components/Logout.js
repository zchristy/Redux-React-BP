import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  localStorage.setItem('token', '');
  return (
    <Redirect to='/login' />
  );
};

export default Logout;

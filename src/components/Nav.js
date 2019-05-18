import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to='/'><div>Dashboard</div></NavLink>
      <NavLink to='/daily-reports'><div>Daily Reports</div></NavLink>
      <NavLink to='/daily-approvals'><div>Daily Approvals</div></NavLink>
      <NavLink to='/list-of-habits'><div>List Of Habits</div></NavLink>
    </nav>
  );
}

export default Nav;

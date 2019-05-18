import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import Nav from './components/Nav';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import Dashboard from './components/Dashboard';
import DailyApprovals from './components/DailyApprovals';
import DailyReports from './components/DailyReports';
import HabitsList from './components/HabitsList';
import UpdateHabit from './components/forms/UpdateHabit';
import CreateHabit from './components/forms/CreateHabit';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path="/" component={Dashboard} />
        <PrivateRoute path='/daily-reports/' component={DailyReports} />
        <PrivateRoute path='/daily-approvals/' component={DailyApprovals} />
        <PrivateRoute path='/habits-list' component={HabitsList} />
        <PrivateRoute path='/create-habit' component={CreateHabit} />
        <PrivateRoute path='/update-habit' component={UpdateHabit} />
      </div>
    </Router>
  );
}

export default App;

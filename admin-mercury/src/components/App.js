import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import Users from "./pages/Users/Users";
import Workflow from "./pages/Workflow/Workflow";
import Calendar from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";


const App =() => {
    return (
        <Switch>
            <Route exact path="/login" component={Signup} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/workflow" component={Workflow} />
            <PrivateRoute exact path="/statistics" component={Statistics} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route component={NotFound}/>
        </Switch>
    );
};

export default App;

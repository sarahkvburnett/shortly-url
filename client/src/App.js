import React, { useEffect, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import { NavBar } from './components/NavBar';
import { Footer } from './layout/Footer';
import { Home } from './pages/Index';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { UserContext } from './context/UserContext';
import { setAuthToken } from './utilities/setAuthToken';
import jwt_decode from 'jwt-decode'

export const App = () => {
    const [ user, setUser ] = useContext(UserContext);

    useEffect(() => {
        if (localStorage.jwtToken) {
            const token = localStorage.jwtToken;
            setAuthToken(token);
            const { firstName, id} = jwt_decode(token);
            setUser(() => ({ isAuth: true, firstName, id, token }));
        }
      }, [])
    
  return (
    <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/login">
                        {user.isAuth ? <Redirect to="/dashboard"/> : <Auth auth="login"/>}
                    </Route> 
                    <Route path="/signup">
                        {user.isAuth ? <Redirect to="/dashboard"/> : <Auth auth="signup" />}
                    </Route>
                    <Route path="/logout">
                        {user.isAuth ? <Auth auth="logout"/> : <Redirect to="/Dashboard"/>}
                    </Route>
                    <Route path="/dashboard">
                        {user.isAuth ? <Dashboard/> : <Redirect to="/login"/> }
                    </Route>
                    <Route path="/">
                        {user.isAuth ? <Redirect to="/dashboard"/> : <Home/>}            
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </CSSTransition>
    </TransitionGroup>
  );
}
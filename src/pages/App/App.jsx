import React, {useState} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import tokenService from '../../utils/tokenService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage';
import Main from '../Main/Main'
import AddFungus from '../AddFungus/AddFungus';

function App() {

  const history = useHistory()
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    tokenService.removeToken();
    userService.logout();
    setUser(null);
    history.push("/login");
  }

  return (
    <div className="App">
       <NavBar
        user={user}
        handleSignUpOrLogin={handleSignUpOrLogin}
        handleLogout={handleLogout}
      />
      <Switch>
      <Route exact path="/">
             <HomePage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/index">
                    <Main handleSignUpOrLogin={handleSignUpOrLogin} />
                </Route>
                <Route exact path="/addfungus">
                    <AddFungus handleSignUpOrLogin={handleSignUpOrLogin} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;

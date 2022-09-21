import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, 
//   Route, Redirect,} from "react-router-dom";
import {Route, Link, Routes} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth } from '../../Firebase/firebase-config.js'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput
}
from 'mdb-react-ui-kit';
import App from '../../App.js'
// import { Link } from 'react-router-dom';
function LoginPage() {
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [loginEmail,setLoginEmail] = useState(""); 
  const [loginPassword,setLoginPassword] = useState("");
  // const [user, setUser] = useState({});
  // auth.onAuthStateChanged(auth, (currentUser) =>{
  //   setUser(currentUser);
  // }, [user])


  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const style = {
    border: "none",
    width: "500px",
    borderRadius: "20px",
    boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff", 
    // width: "100px",
    height: "500px",
  };
  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(auth.currentUser.email);
    }catch (error){
      alert(error.message);
    }
  };

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(auth.currentUser.email);

    }catch (error){
      alert(error.message);
    } 

  };
  const logout = async () =>{

    // await signOut(auth)

  };
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={style}>
        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            {/* <nav>
              <Link to="/">Login</Link>
              <Link to="/Dashboard">App</Link>
            </nav> */}
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => {
              setLoginEmail(e.target.value);
            } } />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => {
              setLoginPassword(e.target.value);
            } } />


            <MDBBtn className="mb-4 w-100" onClick={login}>Sign in</MDBBtn>

          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => {
              setRegisterEmail(e.target.value);
            } } />
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => {
              setRegisterPassword(e.target.value);
            } } />
            <MDBBtn className="mb-4 w-100" onClick={register}>Sign up</MDBBtn>

            {/* <MDBBtn className="mb-4 w-100" onClick={logout}>Sign Out</MDBBtn> */}

          </MDBTabsPane>

        </MDBTabsContent>
      <Routes>
        <Route path = "/" element={<LoginPage />}></Route>
        <Route path = "/Dashboard" element={<App />}></Route>
        <Route path = "*" element={<ErrorPage />}></Route>
      </Routes>
      </MDBContainer>
      
  );
}

export default LoginPage;
import React, { useState } from "react";
import "../styles/login.css";
const Login = ({ setIsLogIn, userdata, setUserdata }) => {
  const [signupdata, setSignupdata] = useState({
    useremail: "",
    userpass: "",
    
  });
  const [err,setErr]=useState(false)

  return (
    <div className='login'>
      <div className='loginScreen'>
        <img
          src='https://www.freeiconspng.com/uploads/linkedin-9.png'
          alt='linked in'
        />
        {userdata.signup ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                userdata.name &&
                userdata.email &&
                userdata.photoUrl &&
                userdata.password
              ) {
                setErr(false)
                setUserdata({ ...userdata, signup: false });
              }
              else{
                setErr(true)
              }
            }}
          >
            <input
              type='text'
              placeholder='Full Name'
              value={userdata.name}
              onChange={(e) => {
                setUserdata({ ...userdata, name: e.target.value });
              }}
            />

            <input
              type='text'
              placeholder='Profile Picture Url Link'
              value={userdata.photoUrl}
              onChange={(e) => {
                setUserdata({ ...userdata, photoUrl: e.target.value });
              }}
            />

            <input
              type='email'
              placeholder='Email'
              value={userdata.email}
              onChange={(e) => {
                setUserdata({ ...userdata, email: e.target.value });
              }}
            />

            <input
              type='password'
              placeholder='Password'
              value={userdata.password}
              onChange={(e) => {
                setUserdata({ ...userdata, password: e.target.value });
              }}
            />
            {err ? <p>Incorrect Username, Password, Email or Photo-Url</p> : null}
            <input type='submit' value='Sign Up' />
            <h4>
              Already a Member ?
              <span
                onClick={() => {
                  setUserdata({ ...userdata, signup: false });
                }}
              >
                Login Here
              </span>
            </h4>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
                e.preventDefault();
                if(userdata.email===signupdata.useremail && userdata.password===signupdata.userpass){
                    setErr(false)
                    setIsLogIn(true);
                }else{
                    setErr(true)
                }
            }}
          >
            <input
              type='email'
              placeholder='Email'
              value={signupdata.useremail}
              onChange={(e) => {
                setSignupdata({ ...signupdata, useremail: e.target.value });
              }}
            />

            <input
              type='password'
              placeholder='Password'
              value={signupdata.userpass}
              onChange={(e) => {
                setSignupdata({ ...signupdata, userpass: e.target.value });
              }}
            />
            {err ? <p>Incorrect Username or Password</p> : null}

            <input type='submit' value='Sign Up' />
            <h4>
              Not a Member ?
              <span
                onClick={() => {
                    setUserdata({ ...userdata, signup: true });
                }}
              >
                Register Here
              </span>
            </h4>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

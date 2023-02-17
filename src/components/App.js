import React,{useState} from "react";
import "../styles/App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
const App = () => {
  const [islogin, setIsLogIn]=useState(false);
  const [userdata, setUserdata] = useState({
    name:"",
    photoUrl:"",
    email:"",
    password:"",
    signup:false

  });

  return (
    <>
      {!islogin ? (
        <Login  setIsLogIn={setIsLogIn} userdata={userdata} setUserdata={setUserdata}/>
      ) : (
        <div id='app__wrapper'>
          <Header userdata={userdata}/>
          <div className='app__body'>
            <Sidebar userdata={userdata}/>
            <Feed userdata={userdata}/>
            <Widget />
          </div>
        </div>
      )}
    </>
  );
};

export default App;

import React from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
const App = () => {


  return (
    <div id="app__wrapper">
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  )
}


export default App;

import React from 'react'
import '../styles/sidebar.css'
import { Avatar } from '@material-ui/core'
const Sidebar = ({userdata}) => {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img style={{height:"50px"} }src='https://images.pexels.com/photos/4644813/pexels-photo-4644813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile bg'/>
            <div className='profile__details'>
                <Avatar src={userdata.photoUrl}/>
                <h4>{userdata.name}</h4>
                <p>Front End Developer</p>
            </div>
            
            <div className='profile__stats'>
                <span>Who viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>
            <div className='profile__stats'>
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className='stat__number'>120</span>
            </div>
        </div>
        <div className='sidebar__recent'>
        <p>Recent</p>
        <p className='hash'><span>#</span> branding</p>
        <p className='hash'><span>#</span> marketing</p>
        <p className='hash'><span>#</span> branching</p>
        <p className='hash'><span>#</span> webdevelopment</p>
        <p className='hash'><span>#</span> programming</p>
        <p className='hash'><span>#</span> reactjs</p>
        <p className='hash'><span>#</span> reduxtoolkit</p>

        </div>
    </div>
  )
}

export default Sidebar
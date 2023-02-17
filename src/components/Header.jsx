import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/header.css'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons//BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core'

const Header = ({userdata}) => {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='logo'/>
            </div>

            <div className='header__search'>
                <SearchIcon/>
                <input type='text' placeholder='Search' />
            </div>

        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title='Home'/>
            <HeaderOptions Icon={PeopleIcon} title='My Network'/>
            <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOptions Icon={MessageIcon} title='Message'/>
            <HeaderOptions Icon={NotificationsIcon} title='Notification'/>
            <HeaderOptions avatar={Avatar} userdata={userdata} title={userdata.name}/>
        </div>
    
    </div>
  )
}

export default Header
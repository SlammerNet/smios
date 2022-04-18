import React from 'react'
import {Link} from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/jonathan.png'
import user_menu from '../../assets/JsonData/user_menus.json'

import './topnav.css'

const current_user = {
  display_name: 'Jonathan Duclos',
  image:user_image
}

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt=''/>
    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>
  </div>
)

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={item}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder='Search devices'/>
        <i className='bx bx-search'/>
      </div>
      <div className="topnave__right">
        <div className="topnave__right-item">
          <Dropdown icon='bx bx-bell' contentData={notifications} renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View All</Link>}/>
        </div>
        <div className="topnave__right-item">
          <Dropdown customToggle={() => renderUserToggle(current_user)} contentData={user_menu} renderItems={(item, index) => renderUserMenu(item, index)}/>
        </div>
      </div>
    </div>
  )
}

export default TopNav;
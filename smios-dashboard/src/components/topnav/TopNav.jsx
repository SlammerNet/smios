import React from 'react'

import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'

import './topnav.css'

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={item}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
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
          <Dropdown icon='bx bx-user' contentData={notifications} renderItems={(item, index) => renderNotificationItem(item, index)}/>
        </div>
        <div className="topnave__right-item">
          <Dropdown icon='bx bx-bell' badge='5'/>
        </div>
        <div className="topnave__right-item">
          <Dropdown/>
        </div>
      </div>
    </div>
  )
}

export default TopNav;
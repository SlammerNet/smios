import React from 'react'

import './sidebar.css'
import small from '../../assets/images/small.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return(
        <div className="sidebar_item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}>
                    <span>{props.title}</span>
                </i>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={small} alt="SMIOS Logo"/>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <a href={item.route} key={index}>
                        <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem}/>
                    </a>
                ))
            }
        </div>
    )
}

export default Sidebar
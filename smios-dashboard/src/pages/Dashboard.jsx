import React from 'react'

import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'

const Dashboard = () => {
  return (
    <>
      <h2 className='page-header'>Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {
              statusCard.map((item, index) => (
                <div className="col-6">
                  <StatusCard icon={item.icon} count={item.count} title={item.title}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
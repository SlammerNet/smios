import React from 'react'

import Table from '../components/table/Table'

import devices from '../assets/JsonData/devices.json'

const deviceTableHead = [
  'id',
  'name',
  'location_lat',
  'location_lon',
  'type'
]

const renderDeviceHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderDeviceBody = (item, index) => (
  <tr key={index}>
    <td>{index}</td>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.location_lat}</td>
    <td>{item.location_lon}</td>
    <td>{item.type}</td>
  </tr>
)

const Devices = () => {
  return (
    <>
      <h2 className='page-header'>
        Devices
      </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table  headData={deviceTableHead} renderHead={(item, index) => renderDeviceHead(item, index)} 
                      bodyData={devices} renderBody={(item, index) => renderDeviceBody(item, index)}
                      limit='15'/>
            </div>
            <div className="card__footer">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Devices;
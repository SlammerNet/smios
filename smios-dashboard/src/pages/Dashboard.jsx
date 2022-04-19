import React from 'react'
import Chart from 'react-apexcharts'
import {Link} from 'react-router-dom'

import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

//Chart data here
const chartOptions = {
  series:[{
    name: 'Dispositivo: Poço Sul Minas 01',
    data: [10,30,50,20,75,10,2]
  },{
    name: 'Dispositivo: Poço Uberlandia',
    data: [105, 16, 10, 27, 408, 10, 129]
  }],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart:{
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke:{
      curve: 'smooth'
    },
    xaxis:{
      categories: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    },
    title: {
      text: 'Vazao de Água - M³',
      align: 'center'
    }
  }
}

const topCostumers = {
  head: ['user', 'total orders', 'total spending'],
  body: [{
    'username':'John Doe',
    'order':'490',
    'price':'$260'
  },{
    'username':'Alexis Texas',
    'order':'210',
    'price':'$110'
  },{
    'username':'Mia Khalifa',
    'order':'398',
    'price':'$270'
  },{
    'username':'Lana Rhodes',
    'order':'600',
    'price':'$1270'
  }
  ]
}

const latestOrders = {
  head: ['order id','user','total price', 'date', 'status'],
  body: [
    {
      id:     '#OGHJ43d',
      user:   'John Doe',
      price:  '$300',
      date:   '21 Nov 1998',
      status: 'shipping'
    },{
      id:     '#OM3343d',
      user:   'John Doe',
      price:  '$300',
      date:   '21 Oct 1998',
      status: 'refund'
    },{
      id:     '#OLOKI3d',
      user:   'Mia Khalifa',
      price:  '$300',
      date:   '4 Apr 1998',
      status: 'shipping'
    },{
      id:     '#POLLM12',
      user:   'Alexis Texas',
      price:  '$300',
      date:   '2 Apr 1998',
      status: 'shipping'
    },{
      id:     '#OCVBM11',
      user:   'Mia Khalifa',
      price:  '$300',
      date:   '19 Nov 1998',
      status: 'pending'
    },{
      id:     '#555013d',
      user:   'Lana Rhodes',
      price:  '$300',
      date:   '29 Dez 1998',
      status: 'shipping'
    },{
      id:     '#OPPKLLd',
      user:   'Jonathan Duclos',
      price:  '$300',
      date:   '19 Jan 1998',
      status: 'paid'
    },{
      id:     '#ZZA34WS',
      user:   'Jonathan Duclos',
      price:  '$300',
      date:   '20 Fev 1998',
      status: 'paid'
    },
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending":"warning",
  "paid":"success",
  "refund": "danger"
}

const renderCostumerHeader = (item, index) => (
  <th key={index}>{item}</th>
)

const renderCostumerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const renderLastestOrdersHeader = (item, index) => (
  <th key={index}>{item}</th>
)

const renderLastestOrdersBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td><Badge type={orderStatus[item.status]} content={item.status}/></td>
  </tr>
)

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
        <div className="col-6">
          <div className="card full-height">
            <Chart options={chartOptions.options} series={chartOptions.series} type='bar' height='100%'/>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top Costumers</h3>
            </div>
            <div className="card__body">
              <Table headData={topCostumers.head} renderHead={(item, index) => renderCostumerHeader(item, index)} 
                      bodyData={topCostumers.body} renderBody={(item, index) => renderCostumerBody(item, index)}/>
            </div>
            <div className="card__footer">
              <Link to='/'> View all costumers</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
            <div className="card">
              <div className="card__header">
                <h3>Latest Orders</h3>
              </div>
              <div className="card__body">
                <Table headData={latestOrders.head} renderHead={(item, index) => renderLastestOrdersHeader(item, index)} 
                      bodyData={latestOrders.body} renderBody={(item, index) => renderLastestOrdersBody(item, index)}/>
              </div>
              <div className="card__footer">
                <Link to=''>View All Orders</Link>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
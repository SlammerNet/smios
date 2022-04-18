import React from 'react'
import Chart from 'react-apexcharts'

import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'

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
      </div>
    </>
  )
}

export default Dashboard;
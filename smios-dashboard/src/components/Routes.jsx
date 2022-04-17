import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Devices from '../pages/Devices'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' component={Dashboard}/>
        <Route path='/devices' component={Devices}/>
    </Switch>
  )
}

export default Routes
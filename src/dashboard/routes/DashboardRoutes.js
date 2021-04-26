import React from 'react'
import { Route } from 'react-router-dom'
import dashboard from '../Dashboard';


const dashboardRoutes = () =>( <Route exact path="/" component={dashboard}/>)
export default dashboardRoutes;

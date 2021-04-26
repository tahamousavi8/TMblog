import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardRoutes from '../../dashboard/routes/DashboardRoutes';
import PostsRoutes from '../../Posts/routes/PostsRoutes';

const appRoutes=()=>
   ( <div>
        <Router>
            <DashboardRoutes/>
            <PostsRoutes/>
        </Router>
    </div>)

export default appRoutes;

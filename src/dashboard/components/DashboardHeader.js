import React from "react";
import {DashboardHeaderRoot} from "./styled.components";
import {Link} from "react-router-dom";


const DashboardHeader=()=>{
    return <DashboardHeaderRoot>
        <h1>Dashboard</h1>
        {/*<Link to="/posts">posts</Link>*/}
    </DashboardHeaderRoot>
}

export default DashboardHeader;
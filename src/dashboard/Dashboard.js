import React,{Component} from 'react';
import {DashboardRoot} from "./components/styled.components";
import DashboardHeader from "./components/DashboardHeader";
import PostsButton from "./components/PostsButton";


export default class Dashboard extends Component {
   render(){
      return<DashboardRoot>
     <DashboardHeader/>
     <PostsButton/>
   </DashboardRoot>
   }
}



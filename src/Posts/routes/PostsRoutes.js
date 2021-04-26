import React from 'react'
import { Route } from 'react-router-dom'
import PostsContainer from '../PostsContainer';

const postsRoutes = ()=> (<Route path="/posts">
    <PostsContainer/>
</Route>)
export default postsRoutes;

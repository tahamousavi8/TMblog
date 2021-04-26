import React from "react";
import PostItem from "./PostItem";
import {PostListRoot} from "./styled.components";

const PostList=({posts})=>
    <PostListRoot>
{(posts.map(post=>(<PostItem key={post.id} post={post}/>)))}
    </PostListRoot>
export default PostList;
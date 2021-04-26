import React from "react";
import {PostHeaderRoot} from "./styled.components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const PostsHeader=()=>{
    return <PostHeaderRoot>
        <h1>Posts</h1>
        <Link to={"/"}>
            <FontAwesomeIcon className="icon" icon={faHome}/>
        </Link>
    </PostHeaderRoot>
}
export default PostsHeader;


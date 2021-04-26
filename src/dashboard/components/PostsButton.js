import React from "react";
import {ClickMe} from "./styled.components";
import {Link} from "react-router-dom";

const PostsButton=()=>{
    return <ClickMe>

        <div className="main center">
            <Link to="/posts">
            <div className="btn center">
                <p>Posts</p>
                <div className="d1"></div>
                <div className="d2"></div>
                <div className="d3"></div>
                <div className="d4"></div>

            </div>
            </Link>
        </div>
    </ClickMe>
}

export default PostsButton;
import React from "react";

const PostItem =({post})=>(<div className="postItem">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
</div>)

export default PostItem;


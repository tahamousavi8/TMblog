import React, { Component } from 'react'
import {fetchPosts} from "./actions/postsAction";
import {connect} from "react-redux";
import PostList from "./components/PostList";
import {BackgroundRoot} from "./components/styled.components";
import Pagination from "./components/Pagination";
import PostsHeader from "./components/PostsHeader";

class PostsContainer extends Component{

    state={_page:1,_limit:5}
    componentDidMount() {
        this.fetchPosts();
    }

    get filters(){
        const {_limit,_page}=this.state;
        return {_limit,_page };
    }

    fetchPosts=()=>this.props.fetchPosts(this.filters);
    onChangeClick=(page)=>this.setState({_page:page},this.fetchPosts);

    render(){
        const {posts,count}=this.props;
        const {_limit,_page}=this.state;
        const {onChangeClick}=this;
        const pagination=<Pagination count={count} page={_page} limit={_limit} onChangeClick={onChangeClick}/>;
        return<BackgroundRoot>
                <PostsHeader/>
                {pagination}
                <PostList posts={posts}/>
                {pagination}
            </BackgroundRoot>
    }

}

const mapStateToProps = (state)=>({
    posts: state.posts,
    fetching:state.fetching,
    error:state.error,
    count:state.count
})
const mapDispatchToProps ={
fetchPosts,
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer);

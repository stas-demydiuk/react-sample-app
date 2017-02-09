import React from 'react'
import {connect} from 'react-redux'
import Blog from './Blog'
import {fetchPosts} from './blogActions'

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
};

class BlogContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return this.props.posts.length
            ? <Blog posts={this.props.posts}/>
            : null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

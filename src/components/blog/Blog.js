import React, {PropTypes} from 'react';
import Post from '../post/PostContainer'

class Blog extends React.Component {
    render() {
        let posts = this.props.posts.map(post => <Post key={post.id} {...post} />);

        return (
            <div className="blog">
                <h1>My Awesome Blog</h1>

                { posts }
            </div>
        );
    };
}

Blog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }))
};

export default Blog;
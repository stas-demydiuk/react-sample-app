import React, {PropTypes} from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {getPostById} from './postSelectors'
import {fetchPost, updatePost} from '../post/postActions'
import PostEditForm from './PostEditForm'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => {
            dispatch(fetchPost(postId))
        },
        updatePost: function (postId, data) {
            dispatch(updatePost(postId, data))
        }
    }
};

const mapStateToProps = (state, props) => {
    return {
        post: getPostById(state, props)
    }
};

class PostEditFormContainer extends React.Component {
    render() {
        return this.props.post
            ? <PostEditForm onSubmit={this.updatePost} {...this.props.post}/>
            : null
    }

    updatePost = (data) => {
        this.props.updatePost(this.props.post.id, data);
        hashHistory.goBack();
    };

    componentDidMount() {
        if (!this.props.post) {
            this.props.fetchPost(this.props.params.postId);
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.post) {
            this.props.fetchPost(nextProps.params.postId);
        }
    }
}

PostEditFormContainer.propTypes = {
    params: PropTypes.shape({
        postId: PropTypes.string.isRequired
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditFormContainer)
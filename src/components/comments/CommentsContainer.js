import React from 'react'
import {connect} from 'react-redux'
import {getPostComments} from './commentsSelectors'
import {fetchComments} from './commentsActions'
import Comments from './Comments'

const mapStateToProps = (state, props) => {
    return {
        comments: getPostComments(state, props)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (postId) => {
            dispatch(fetchComments(postId))
        }
    }
};

class CommentsContainer extends React.Component {
    render() {
        return <Comments comments={this.props.comments}/>
    }

    componentDidMount() {
        if (!this.props.comments.length) {
            this.props.fetchComments(this.props.postId);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer);

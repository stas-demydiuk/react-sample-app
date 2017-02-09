import React, {PropTypes} from 'react'
import {hashHistory} from 'react-router'
import Button from '../button/Button'
import CommentsContainer from '../comments/CommentsContainer'

class Post extends React.Component {
    constructor() {
        super();

        this.state = {
            isCommentsVisible: false
        };
    }

    render() {
        let comments = this.state.isCommentsVisible
            ? <CommentsContainer postId={this.props.id}/>
            : null;

        return (
            <div className="post">
                <h2 className="post-title">{this.props.title}</h2>
                <p className="post-body">{this.props.body}</p>

                <Button label="Edit"
                        color="blue"
                        onClick={this.onEditBtnClick}/>

                <Button label="Delete"
                        color="red"
                        onClick={this.onDeleteBtnClick}/>

                <Button label={this.state.isCommentsVisible ? "Hide comments" : "Show comments"}
                        color="green"
                        onClick={this.switchCommentsVisibility}/>

                {comments}
            </div>
        );
    }

    onDeleteBtnClick = () => {
        this.props.deletePost(this.props.id);
    };

    onEditBtnClick = () => {
        hashHistory.push(`/edit/${this.props.id}`);
    };

    switchCommentsVisibility = () => {
        this.setState(state => ({
            isCommentsVisible: !state.isCommentsVisible
        }));
    };
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default Post;
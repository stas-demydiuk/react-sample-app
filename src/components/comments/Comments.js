import React from 'react';

class Comments extends React.Component {
    render() {
        let comments = this.props.comments.map(comment => <li key={comment.id}>{comment.name}</li>);

        return (
            <ul>
                {comments}
            </ul>
        );
    }
}

export default Comments;
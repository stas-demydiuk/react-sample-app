import React, {PropTypes} from 'react';
import {hashHistory} from 'react-router'

class PostEditForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            body: props.body
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    handleBack = (event) => {
        hashHistory.goBack();
    };

    render() {
        return (
            <form className="post-form" onSubmit={this.handleSubmit}>
                <h2>Post Editor</h2>

                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                <label htmlFor="body">Body</label>
                <textarea id="body" name="body" value={this.state.body} onChange={this.handleInputChange}></textarea>

                <button className="btn btn-green" type="submit">Save</button>
                <button className="btn btn-blue" type="button" onClick={this.handleBack}>Cancel</button>
            </form>
        );
    }
}

PostEditForm.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PostEditForm;
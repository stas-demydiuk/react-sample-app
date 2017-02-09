import {connect} from 'react-redux';
import {deletePost} from './postActions';
import Post from './Post';

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => {
            dispatch(deletePost(postId))
        }
    }
};

export default connect(null, mapDispatchToProps)(Post);
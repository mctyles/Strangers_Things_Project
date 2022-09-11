import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiDelete } from "../api";
import MessageForm from "./MessageForm";

const SinglePost = ({ posts, setPosts, token }) => {
    const [messageStatus, setMessageStatus] = useState(false);

    const { postId } = useParams();
    const navigate = useNavigate();

    const deleteThisPost = () => {
        const data = apiDelete(post, token);
        setPosts((prev) => prev.filter((post) => postId !== post.id));
        navigate('/posts')
    }

    const post = posts.find((post) => post._id === postId);

    const openMessageForm = () => setMessageStatus(true);

    return (
        <div className="card m-3">
            <h5 className="card-header">{post.title}</h5>
            <div className="card-body">
                <h5 className="card-title">Price: {post.price}</h5>
                <p className="card-text">Description: {post.description}</p>
                <p className="card-text">Location: {post.location}</p>
                <p className="card-text">Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
                {post.isAuthor && (
                <button
                className="btn btn-link text-danger"
                onClick={() => deleteThisPost(post)}
                >
                Delete
                </button>
            )}
            <Link to="/posts">Back to posts</Link>
            {
                !post.isAuthor && token && (
                    <button onClick={openMessageForm}>Send Message to Author</button>
                )
            }
            {
                messageStatus && <MessageForm post={post} token={token} setMessageStatus={setMessageStatus}/>
            }
            </div>
        </div>
    )
}

export default SinglePost;
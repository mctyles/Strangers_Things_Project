import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiDelete } from "../api";
import MessageForm from "./MessageForm";
import EditPost from "./EditPost";

const SinglePost = ({ posts, setPosts, token }) => {
    const [messageFormActive, setMessageFormActive] = useState(false);
    const [editPostActive, setEditPostActive] = useState(false);

    const { postId } = useParams();
    const navigate = useNavigate();

    const deleteThisPost = () => {
        const data = apiDelete(post, token);
        setPosts((prev) => prev.filter((post) => postId !== post.id));
        navigate('/posts')
    }

    const post = posts.find((post) => post._id === postId);

    return (
        <>
        {
            !editPostActive ? 
            (
            <>
            <div className="card m-3">
                <h5 className="card-header">{post.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">Price: {post.price}</h5>
                    <p className="card-text">Description: {post.description}</p>
                    <p className="card-text">Location: {post.location}</p>
                    <p className="card-text">Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
                <p className="card-text font-weight-bold">{`Last updated by ${post.author.username} at ${post.updatedAt}`}</p>
                {post.isAuthor && (
                    <button
                    className="btn btn-link text-danger"
                    onClick={() => deleteThisPost(post)}
                    >
                    Delete
                    </button>
                )}
                { post.isAuthor &&
                <button className="btn btn-link text-info" onClick={() => setEditPostActive(!editPostActive)}>Edit Post</button>
                }
                {
                    !post.isAuthor && token && (
                        <button className="btn btn-link text-info" onClick={() => setMessageFormActive(!messageFormActive) }>
                            {!messageFormActive ? 'Send Message to Author' : 'Hide Message Form'}
                        </button>
                    )
                }
                <Link to="/posts" className="btn btn-link text-info">Back to posts</Link>
                </div>
            </div>
            <div>
                {
                    messageFormActive && <MessageForm post={post} token={token} setMessageFormActive={setMessageFormActive}/>
                }
            </div>
            </>
            ) : (
                <EditPost post={post} setEditPostActive={setEditPostActive} token={token}/>
            )
}
        </>
    )
}

export default SinglePost;
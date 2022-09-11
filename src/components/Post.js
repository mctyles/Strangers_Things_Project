import { apiDelete } from "../api";
import { Link } from "react-router-dom";



const Post = ({ post, setPosts, token }) => {

    const postId = post._id;

    const deletePost = () => {
        const data = apiDelete(post, token);
        setPosts((prev) =>
        prev.filter((post) => postId !== post._id)
      );
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">{post.title}</h5>
            <div className="card-body">
                <h5 className="card-title">Price: {post.price}</h5>
                <p className="card-text">Description: {post.description}</p>
                <p className="card-text">Location: {post.location}</p>
                <p className="card-text">Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
                <p className="card-text font-weight-bold">{`Last updated by ${post.author.username} at ${post.updatedAt}`}</p>
                <Link className="card-link" to={`/posts/${post._id}`}>
                View Post
                </Link>
                {post.isAuthor && (
                <button
                className="btn btn-link text-danger"
                onClick={() => deletePost(post)}
                >
                Delete
                </button>
            )}
            </div>
        </div>
        )
}

export default Post;


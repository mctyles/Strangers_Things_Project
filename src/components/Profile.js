import { Link } from "react-router-dom";
import Post from "./Post";

const Profile = ({ user }) => {
    
    const { posts } = user;

    return (
    <div>
      <h1>{`${user.username}'s Profile`}</h1>
      <h2>Post History</h2>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      <h2>Messages</h2>
      {user.messages.map ((message) => {
        return (
            <div className="card m-3">
            <h5 className="card-header">{`Message sent by ${message.fromUser.username}`}</h5>
            <div className="card-body">
                <Link className="card-text" to={`/posts/${message.post._id}`}>View Post</Link>
                <p className="card-text">{message.content}</p>
            </div>
        </div>
        )
      })
      }
    </div>
    )
}

export default Profile;
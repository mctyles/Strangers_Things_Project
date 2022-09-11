import { Link } from "react-router-dom";
import Post from "./Post";

const Profile = ({ user }) => {
    
    const { posts, messages } = user;

    const sentMessages = messages.filter((message) => message.fromUser.username === user.username);

    const receivedMessages = messages.filter((message) => message.fromUser.username !== user.username);

    return (
    <div>
      <h1>{`${user.username}'s Profile`}</h1>
      <h2>Post History</h2>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      <h2>Received Messages</h2>
      {
      receivedMessages.map ((message) => {
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
      <h2>Sent Messages</h2>
      {
      sentMessages.map ((message) => {
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
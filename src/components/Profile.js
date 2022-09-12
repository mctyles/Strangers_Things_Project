import { Link, useParams } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import SentMessages from "./SentMessages";
import ReceivedMessages from "./ReceivedMessages";
import YourPosts from "./YourPosts";

const Profile = ({ user }) => {
    
    const { posts, messages } = user;

    const { section } = useParams();

    return (
    <div className="d-flex flex-row">
        <ProfileNav user={user}/>
          <div className="p-4">
      {
        section ==='home' && (
          <h3 className="mb-4">Welcome to your profile!</h3>
        )
      }
      {
      section === 'posts' && (
              <YourPosts posts={posts}/>
      )
      }
      {
        section === 'received' && (
          <ReceivedMessages user={user} messages={messages}/>
        )
      }
      {
        section === 'sent' && (
          <SentMessages user={user} messages={messages}/>
        )
      }
        </div>
    </div>
    )
}

export default Profile;
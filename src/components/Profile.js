import { Link, useParams } from "react-router-dom";
import Post from "./Post";
import ProfileNav from "./ProfileNav";
import SentMessages from "./SentMessages";
import ReceivedMessages from "./ReceivedMessages";
import YourPosts from "./YourPosts";

const Profile = ({ user }) => {
    
    const { posts, messages } = user;

    const { section } = useParams();

    return (
    <div className="d-flex flex-row">
        <ProfileNav className="w-20"/>
          <div className="p-4">
          <h1 className="mb-4">{`${user.username}'s Profile`}</h1>
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
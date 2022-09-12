import { Link } from 'react-router-dom'

const ProfileNav = ({ user }) => {
    return (
    <nav className="profile-nav f-flex flex-column align-items-center p-3">
        <p>{`${user.username}'s Profile`}</p>
        <Link to="/profile/posts" className='d-block'>Your Posts</Link>
        <Link to="/profile/received" className='d-block mt-3'>Received Messages</Link>
        <Link to="/profile/sent" className='d-block mt-3'>Sent Messages</Link>
    </nav>
    )
}

export default ProfileNav;
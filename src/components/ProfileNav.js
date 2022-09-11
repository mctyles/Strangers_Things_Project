import { Link } from 'react-router-dom'

const ProfileNav = () => {
    return (
    <nav className="profile-nav f-flex flex-column align-items-center p-4">
        <h6>Navigate Profile</h6>
        <Link to="/profile/posts" className='d-block'>Your Posts</Link>
        <Link to="/profile/received" className='d-block'>Received Messages</Link>
        <Link to="/profile/sent" className='d-block'>Sent Messages</Link>
    </nav>
    )
}

export default ProfileNav;
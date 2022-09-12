import { Link } from 'react-router-dom'

const ProfileNav = ({ user }) => {
    return (
    <nav className="profile-nav f-flex flex-column align-items-center p-3">
        <p>{`${user.username}'s Profile`}</p>
        <Link to="/profile/posts" className='d-block nav-link' id="v-pills-posts-tab" data-bs-toggle="pill" href="#v-pills-posts" role="tab" aria-controls="v-pills-posts" aria-selected="false">Your Posts</Link>
        <Link to="/profile/received" className='d-block nav-link mt-3' id="v-pills-received-tab" data-bs-toggle="pill" href="#v-pills-received" role="tab" aria-controls="v-pills-received" aria-selected="false">Received Messages</Link>
        <Link to="/profile/sent" className='d-block nav-link mt-3' id="v-pills-sent-tab" data-bs-toggle="pill" href="#v-pills-sent" role="tab" aria-controls="v-pills-sent" aria-selected="false">Sent Messages</Link>
    </nav>
    )
}

export default ProfileNav;
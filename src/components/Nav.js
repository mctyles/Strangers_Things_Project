import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'

const Nav = () => {
    return (
    <div className='nav'>
        <Link to="/"> Home</Link>
        <Link to="/posts"> Posts</Link>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Sign Up</Link>
    </div>

    )
}

export default Nav;
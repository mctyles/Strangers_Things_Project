import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'

const Nav = () => {
    return (
    <nav className='nav d-flex p-2 flex-row justify-content-between'>
        <ul className="nav nav-pills d-flex p-2 flex-row">
            <li className="nav-item"><Link className ="border border-dark nav-link" to="/"> Home</Link></li>
            <li className="nav-item"><Link className ="border border-dark nav-link" to="/posts"> Posts</Link></li>
        </ul>
        <ul className="nav nav-pills d-flex p-2 flex-row">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
                <div className="dropdown-menu">
                    <Link className ="dropdown-item" to="/account/login"> Login</Link>
                    <Link className ="dropdown-item" to="/account/signup"> Sign Up</Link>
                </div>
            </li>
        </ul>
    </nav>
    )
}

export default Nav;
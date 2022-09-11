import { Link, useNavigate } from 'react-router-dom'

const Nav = ({ token, setToken }) => {

    const navigate = useNavigate();

    const logout = () => {
        setToken('');
        navigate('/');
    }

    return (
    <nav className='nav d-flex p-4 flex-row justify-content-between'>
        <ul className="nav nav-pills d-flex p-2 flex-row">
            <li className="nav-item"><Link className="nav-link" to="/"> Home</Link></li>
            <li className="nav-item ml-2"><Link className="nav-link" to="/posts"> Posts</Link></li>
        </ul>
        <ul className="nav nav-pills d-flex p-2 flex-row">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{token ? 'Your Account' : 'Log In / Sign Up'}</a>
                <div className="dropdown-menu">
                    {
                    token ?
                    <>
                    <Link className ="dropdown-item" to="/profile/home">Profile</Link>
                    <a className ="dropdown-item" href="#" onClick = { () => {
                        logout();
                        return false;
                    }
                    }> Log Out</a>
                    </> :
                    <>
                    <Link className ="dropdown-item" to="/account/login"> Login</Link>
                    <Link className ="dropdown-item" to="/account/signup"> Sign Up</Link>
                    </>
                    }
                    </div>
            </li>
        </ul>
    </nav>
    )
}

export default Nav;
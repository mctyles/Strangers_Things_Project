import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState } from "react";
import { fetchAccount } from "../api";

const AccountForm = ({ setToken }) => {
    const navigate = useNavigate();
    const { action } = useParams();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (event) => {
        try {
        event.preventDefault();
        const { token } = await fetchAccount(action, username, password);
        setToken(token);
        navigate('/'); 
        } catch(err) {
            setError(err);
        }
    }

    return (
        <>
        <h1 className="ml-2">{action === 'login' ? 'Log In' : 'Sign Up'}</h1>
        {error && <div class="alert alert-danger" role="alert">{error}</div>}
        <form 
        onSubmit={handleSubmit}
        className = "d-flex flex-column align-items-start m-3"
        >
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username" 
            className="form-control mt-2"
            value = {username}
            onChange = {(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password" className="mt-2">Password:</label>
            <input 
            type="password" 
            id="password" 
            className="form-control"
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="mt-2">
                {action === 'login' ? 'Log In' : 'Sign Up'}
            </button>
        </form>
        </>
    )
}

export default AccountForm;
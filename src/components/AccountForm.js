import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState } from "react";
import { fetchAccount } from "../api";

const AccountForm = ({ setToken }) => {
    const navigate = useNavigate();
    const { action } = useParams();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { token } = await fetchAccount(action, username, password);
        setToken(token);
        navigate('/');
    }

    return (
        <>
        <h1>{action === 'login' ? 'Log In' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username" 
            value = {username}
            onChange = {(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
            />
            {
            action === 'signup' &&
            <>
            <label htmlFor="not-a-scammer">I am not a scammer</label>
            <input type="checkbox" />
            </>
            }
            <button type="submit">
                {action === 'login' ? 'Log In' : 'Sign Up'}
            </button>
        </form>
        </>
    )
}

export default AccountForm;
import { useParams } from "react-router-dom"

const AccountForm = () => {
    const { action } = useParams();

    return (
        <>
        <h1>{action === 'login' ? 'Log In' : 'Sign Up'}</h1>
        <form>
            <label HTMLfor="username">Username:</label>
            <input type="text" id="username"/>
            <label HTMLfor="password">Password:</label>
            <input type="password" id="password"/>
            {
            action === 'signup' &&
            <>
            <label HTMLfor="not-a-scammer">I am not a scammer</label>
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
const Signup = () => {
    return (
        <form>
        <label for="username">Username:</label>
        <input type="text" id="username"/>
        <label for="password">Password:</label>
        <input type="password" id="password"/>
        <label for="not-a-scammer">I am not a scammer</label>
        <input type="checkbox" />
        <button type="submit">
            Sign Up
        </button>
        </form>
    )
}

export default Signup;
const Home = ({ token, user }) => {
    return (
        <div className="m-5">
            { token && user && <h2>Hello, {user.username}!</h2> }
            <h3>Welcome to Stranger's Things where you can find the strangest things at slightly unreasonable prices.</h3>
        </div>
    )
}

export default Home;
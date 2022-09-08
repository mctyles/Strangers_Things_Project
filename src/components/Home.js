const Home = ({ user }) => {
    return (
        <div className="m-5">
            { user && <h3>Hello, {user.username}!</h3> }
            <h2>Welcome to Stranger's Things where you can find the strangest things at slightly unreasonable prices.</h2>
        </div>
    )
}

export default Home;
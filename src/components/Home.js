
const Home = ({ token, user }) => {
    return (
        <div className="mx-5 my-2 px-2">
            { token && user && <h2>Hello, <span className="username">{user.username}</span>!</h2> }
            <h3 className="mt-5">Welcome to Stranger's Things where you can find the strangest things at slightly unreasonable prices.</h3>
        </div>
    )
}

export default Home;
import Nav from "./Nav";

const Header = ({ token, setToken }) => {
    return (
        <header id="header" className="d-flex p-1 flex-column">
            <h1 id="title" className="text-center mt-4">Stranger's Things</h1>
            <Nav token = {token} setToken={setToken}/>
        </header>
    )
}

export default Header;
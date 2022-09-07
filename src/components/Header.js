import Nav from "./Nav";

const Header = ({ token, setToken }) => {
    return (
        <header className="d-flex p-2 flex-column">
        <h1 className="text-center">Stranger's Things</h1>
        <Nav token = {token} setToken={setToken}/>
        </header>
    )
}

export default Header;
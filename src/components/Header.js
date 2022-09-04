import Nav from "./Nav";

const Header = () => {
    return (
        <header className="d-flex p-2 flex-column">
        <h1 className="text-center">Stranger's Things</h1>
        <Nav />
        </header>
    )
}

export default Header;
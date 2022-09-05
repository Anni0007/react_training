import logo from "../Images/logo.png"
export default function Headers() {
    return (
        <nav className="nav-bar">
            <img className="logo" src={logo} ></img>
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
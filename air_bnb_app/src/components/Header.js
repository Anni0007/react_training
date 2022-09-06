import logo from "../images/Airbnb-Logo.png"
export default function Header() {
    return (
        <nav className="nav-bar">
            <img src={logo} className="bnb-logo"></img>
        </nav>
    )
}
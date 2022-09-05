function Header(){
    return (
        <header>
            <nav className="nav-bar">
                <img src="./logo.png" alt="react logo" className="logo"></img>
                <ul className="nav-items">
                    <li> Pricing</li>
                    <li> About</li>
                    <li>Contact Us </li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
        <div>
            <h1 className="heading"> Reason I'm excited to learn React</h1>
            <ol>
                <li>It's is very popular library</li>
                <li>I'm more likely to get a job</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <small>&copy; by Konverge.Ai 2022. All right reserved</small>
    )
}

function MainPage() {
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<MainPage/>, document.getElementById("root"))


function Header(){
    let menu = ["Home", "About", "Services", "Contact"]
    let menuList = menu.map((link) => <li key={link}><a href="#">{link}</a></li>)

    return(
        <header>
            <h1>CV Application Project</h1>
            <nav>
                <ul id="menu">
                    {menuList}
                </ul>
            </nav>
            <hr></hr>
        </header>
    )

}

export default Header
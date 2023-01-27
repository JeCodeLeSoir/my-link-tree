export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul className="nav-list">
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
                <li className="nav-item"><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
}
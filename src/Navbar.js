const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog Site</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
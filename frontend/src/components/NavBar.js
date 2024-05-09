import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="navbar">
            <Link to="/" className="primary m-2 link">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/add">Add Book</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )

}
export default NavBar;
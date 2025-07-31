import { Link, Links } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return <div className="navBar">
        <div></div>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contacts"}>Contacts</Link>
        </ul>
    </div>
}
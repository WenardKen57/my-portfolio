import { Link, Links } from "react-router-dom";

export default function NavBar() {
    return <div>
        <div></div>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contacts"}>Contacts</Link>
        </ul>
    </div>
}
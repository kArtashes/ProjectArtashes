import { Link } from "react-router-dom";


export default function MenuItems () {
    return (
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}
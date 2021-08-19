/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center bg-light">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link text-dark" activeClassName="font-weight-bold">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/bestsellers" className="nav-link text-dark" activeClassName="font-weight-bold">Bestsellers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/createyourown" className="nav-link text-dark disabled" activeClassName="font-weight-bold">Create your own</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/products" className="nav-link text-dark" activeClassName="font-weight-bold">Shop All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/aboutus" className="nav-link text-dark disabled" activeClassName="font-weight-bold">About us</NavLink>
                </li>
            </ul>
        </div>
    )
}
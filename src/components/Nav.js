import { Link } from "react-router-dom"
import React, {useState} from "react"
import hamburgerIcon from "../images/hamburger-menu.png"
const pages = [
    ["/", "Home"],
    ["/about", "About"],
    ["/menu", "Menu"],
    ["/reservations", "Reservations"],
    ["/order-online", "Order Online"],
    ["/login", "Login"],
]



export default function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                {pages.map(page => <li key={page[1]} className="nav-item"><Link to={page[0]}>{page[1]}</Link></li>)}
            </ul>
        </nav>
    )
}
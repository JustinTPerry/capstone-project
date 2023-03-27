import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
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
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    

    const navList = () => {
        return(
            <ul className="nav-list">
                {pages.map(page => <li key={page[1]} className="nav-item"><Link to={page[0]}>{page[1]}</Link></li>)}
            </ul>
        )
    }

    const smallNav = () => {
        return(
            <section className="small-nav-container">
                <button src={hamburgerIcon}  aria-label="Menu Reveal Button" onClick={() => setShow(prevShow => !prevShow)}> {show ? "︿" : "☰"} </button>
                {show && navList()}
            </section>
        )
    }
    return (
        <nav>
            {(windowSize[0] > 950) ? navList() : smallNav()}
        </nav>
    )
}
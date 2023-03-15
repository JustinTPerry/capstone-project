import logo from "../images/Tall-Logo.jpeg"
export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <ul className="footer-nav">
                <h3>Doormat Navigation</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul className="footer-contact">
                <h3>Contact</h3>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer-social">
                <h3>Social Media Links</h3>
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.twitter.com">Twitter</a></li>
                <li><a href="www.instagram.com">Instagram</a></li>
            </ul>
        </footer>
    )
}
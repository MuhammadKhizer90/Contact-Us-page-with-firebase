import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
function Navbar() {
  return (
    <div>
    <nav className="flex items-center justify-between px-0 py-8 h-20 mx-6 my-auto">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <ul className="flex gap-x-4 font-medium">
            <li><Link to="/path">Home</Link></li>
            <li><Link to="/path">About</Link></li>
            <li><Link to="/path">Contact</Link></li>
        
        </ul>
    </nav>
</div>
  )
}

export default Navbar
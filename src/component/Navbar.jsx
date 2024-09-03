import '../styles/Navbar.css'
import image from '../assets/selis.png'

function Navbar () {
    return (
        <>
        
        <nav>
            <ul>
                <li>
                <img className='selis' src={image} alt="" />
                </li>
                <li>BIKES</li>
                <li>DEALER</li>
                <li>SERVICES</li>
            </ul>
        </nav>
        </>
    )
}
    
export default Navbar;
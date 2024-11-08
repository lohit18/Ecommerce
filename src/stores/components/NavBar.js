import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {

    const {cartItems} = useCart();

    return (
        <>
        <div className="navsection">
            <div className="title" >
            <Link to="/"><h2><span>E</span>-Mart</h2></Link>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search..." class="search-box"/>
                
            </div>
            <div className="user">
                <div className="userdetails">
                    SignIn/SignUp
                </div>
                <Link to="/cart"><div className="cart">Cart (<span>{cartItems.length}</span>)</div></Link>
               </div>
        </div>
        <div className="subMenu">
            <ul className="underline">
                <Link to="/mobile"><li><span>M</span>obiles</li></Link>
                <Link to="/computer"><li><span>C</span>omputers</li></Link>
                <Link to="/watches"><li><span>W</span>atches</li></Link>
                <Link to="/menfashion"> <li><span>M</span>en Fashion</li></Link>
                <Link to="/womanfashion"><li><span>W</span>oman Fashion</li></Link>
                <Link to="/furniture"><li><span>F</span>urniture</li></Link>
                <Link to="/kitchen"><li><span>K</span>itchen</li></Link>
                <Link to="/conditioner"><li><span>A</span>ir Conditioner</li></Link>
            </ul>
        </div>
        </>
    )
};

export default NavBar;
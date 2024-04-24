import CartContext from "../../CartContext/CartContext";


import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
// import { BiSolidLogOut } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";


import {Link} from 'react-router-dom'

import "./index.css"

const NavBar = () =>(
<CartContext.Consumer>
    {value => {
      const {cartList} = value
      
     
return(
   <><div className='nav-container'>
    <h1 className='logo-name'>Property Rentals</h1>
    <div className='icon-container-nav'>
    <Link to="/home" className="nav-link"><FaHome size={20}/></Link>
    
    <Link to="/cart" className="nav-link"><div className="total-cart"><FaCartShopping size={18}/> <p className="total">{cartList.length}</p> </div></Link>
    <Link to="/" className="nav-link"> <RiLogoutCircleLine size={20}/></Link>
    </div>
   </div>
   </>
)
}}
  </CartContext.Consumer>
)
export default NavBar
// How to use css in react !!

import { Link } from "react-router-dom";
import "./root.css"
function Navbar (props){
    return (
        <nav>
            <div className="inner-container">
                
                <h3>Shop</h3>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <p>total price : {props.totalPrice} $</p>
            </div>
        </nav>
        );
}

export default Navbar;
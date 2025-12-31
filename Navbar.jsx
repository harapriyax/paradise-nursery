import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const qty = useSelector(state => state.cart.totalQuantity);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/plants">Plants</Link> | 
      <Link to="/cart">Cart ({qty})</Link>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
  <nav className="nav flex-column">
    <Link className="nav-link" to="/products">Products</Link>
  </nav>
  )
};

export default LeftNav;

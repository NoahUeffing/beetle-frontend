import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
  <nav className="nav flex-column">
    <div className="list-group">
      <Link to="/" className="list-group-item list-group-item-action">
        Home
      </Link>
      <Link to="/products" className="list-group-item list-group-item-action">
        Products
      </Link>
      <Link to="/about" className="list-group-item list-group-item-action">
        About
      </Link>
    </div>
  </nav>
  )
};

export default LeftNav;

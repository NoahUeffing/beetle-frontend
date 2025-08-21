import { Link } from "react-router-dom";
import "../style.css";

const DropdownMenu = ({ show, links, onClose }) => {
  if (!show) return null;

  return (
    <div className="dropdown-menu-custom">
      {links.map((item) => (
        <Link
          key={item.to}
          className="dropdown-item-custom"
          to={item.to}
          onClick={item.onClick ? item.onClick : onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;

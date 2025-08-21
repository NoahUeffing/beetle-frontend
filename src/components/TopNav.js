import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBug } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "./Dropdown";
import SearchBar from "./SearchBar";
import "../style.css";

const TopNav = ({
  navLinks = [{ to: "/about", label: "About" }],
  dropdownLinks = [],
  jwtToken,
  setJwtToken,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const logOut = () => {
    // TODO: add this
    setJwtToken("");
  };
  // Conditionally add Login or Logout
  const userDropdownLinks = jwtToken
    ? [
        ...dropdownLinks,
        { to: "/profile", label: "Profile" },
        { to: "/favourites", label: "Favourites" },
        { to: "/login", label: "Logout", onClick: logOut },
      ]
    : [...dropdownLinks, { to: "/login", label: "Login" }];
  return (
    <>
      <div className="topnav-row">
        <div className="topnav-col">
          <Link to="/" className="topnav-home-link">
            <div className="topnav-brand">
              <FontAwesomeIcon icon={faBug} className="topnav-bug-icon" />
              <h2 className="topnav-title">Beetle Supplements</h2>
            </div>
          </Link>
        </div>
        <div className="topnav-search">
          <SearchBar className="searchbar-main" />
        </div>
        <div className="topnav-col topnav-right">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className="topnav-link">
              {item.label}
            </Link>
          ))}
          <div
            className="topnav-dropdown-trigger"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <FontAwesomeIcon icon={faUser} className="topnav-user-icon" />
            <DropdownMenu
              show={showDropdown}
              links={userDropdownLinks}
              onClose={() => setShowDropdown(false)}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TopNav;

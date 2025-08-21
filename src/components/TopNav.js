import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [jwtToken, setJwtToken] = useState("");

  const handleIconClick = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Beetle Supplements</h1>
        </div>
        <div className="col text-end position-relative">
          <span
            style={{ cursor: "pointer" }}
            onClick={handleIconClick}
            tabIndex={0}
            aria-label="User menu"
          >
            <FontAwesomeIcon icon={faUser} className="fa-2xl mt-4" />
          </span>
          {showDropdown && (
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                right: 0,
                top: "100%",
                minWidth: "150px",
                zIndex: 1000,
              }}
            >
              <Link
                className="dropdown-item"
                to="/profile"
                onClick={() => setShowDropdown(false)}
              >
                Profile
              </Link>
              <Link
                className="dropdown-item"
                to="/settings"
                onClick={() => setShowDropdown(false)}
              >
                Settings
              </Link>
              {jwtToken === "" ? (
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={() => setShowDropdown(false)}
                >
                  Login
                </Link>
              ) : (
                <Link
                  className="dropdown-item"
                  to="/logout"
                  onClick={() => setShowDropdown(false)}
                >
                  Logout
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default TopNav;

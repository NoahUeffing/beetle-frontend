import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
       <FontAwesomeIcon icon={faSearch} className="searchbar-icon" />
    <input
      type="text"
      placeholder="Search..."
      className="searchbar-main"
    />
    </div>
  )
};

export default SearchBar;
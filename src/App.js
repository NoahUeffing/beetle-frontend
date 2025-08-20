import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Beetle Supplements</h1>
        </div>

        <div className="col text-end ">
          <Link to="/login">
            <span className="badge bg-success mt-4">Login</span>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-2">
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
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

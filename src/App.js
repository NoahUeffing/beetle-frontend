import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";

function App() {

  return (
    <div className="container-flex mx-4">
      <TopNav />
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

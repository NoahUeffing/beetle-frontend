import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";
import { useState } from "react";

function App() {
  const [jwtToken, setJwtToken] = useState("1");


  return (
    <div className="container-flex mx-4">
      <TopNav jwtToken={jwtToken} />
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

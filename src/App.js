import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  // TODO: Update this
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");


  return (
    <div className="container-flex mx-4">
      <TopNav jwtToken={jwtToken} setJwtToken={setJwtToken} />
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />
          <Outlet context={{ jwtToken, setJwtToken, setAlertClassName, setAlertMessage }} />
        </div>
      </div>
    </div>
  );
}

export default App;

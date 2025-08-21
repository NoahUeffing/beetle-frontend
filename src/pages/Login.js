import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken, setAlertMessage, setAlertClassName  } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlertMessage(""); // Clear alert
    setAlertClassName("d-none");
    if (email === "admin@email.com") {
      // TODO: Update this
      setJwtToken("your_jwt_token");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid credentials");
    }
  };

  useEffect(() => {
    return () => {
      setAlertMessage("");
      setAlertClassName("d-none");
    };
  }, [setAlertClassName, setAlertMessage]);

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          title="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email-new"
          className="form-control"
        />
        <Input
          type="password"
          name="password"
          title="Password"
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          className="form-control"
        />
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;

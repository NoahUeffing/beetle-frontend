import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@2email.com" && password === "password123") {
      // Handle successful login
    }
  };

  return (
    <div className="text-center">
      <h2 className="p-3 mb-3">Login</h2>

      <Input
        type="email"
        name="email"
        title="Email Address"
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email-new"
        className="form-control"
      />
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
      <input
        type="submit"
        value="Login"
        className="btn btn-primary"
      />
    </div>
  );
};

export default Login;

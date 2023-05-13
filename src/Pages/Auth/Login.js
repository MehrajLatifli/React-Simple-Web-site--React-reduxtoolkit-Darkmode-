import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

export default function Login() {
  const { setUser } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const LoginHandle = () => {
    setUser({ username: document.getElementById("username").value , password: document.getElementById("password").value });
    navigate(location?.state?.return_url || "/profile");
  };

  return (
    <div>
         <br/>
         
         <br/>
      <form id="myForm">
        <input type="text" name="username" id="username" placeholder="username" />
        <br/>
         
         <br/>
        <input type="password" name="password" id="password" placeholder="password" />
        <br />
        <br />
      </form>
      <br />
      <button type="button" class="btn btn-primary" onClick={LoginHandle}>Login</button>
    </div>
  );
}

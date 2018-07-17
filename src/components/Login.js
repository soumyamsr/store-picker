import React from "react";
import PropType from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign In to manage your stores and inventory</p>
    <button className="github" onClick={() => props.authenticate('Github')}>Login with Github</button>
  </nav>
);

Login.protoTypes = {
  authenticate: PropType.func
};

export default Login;

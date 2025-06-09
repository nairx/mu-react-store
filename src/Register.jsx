import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input type="text" placeholder="Enter Name" />
      </p>
      <p>
        <input type="text" placeholder="Enter Email Address" />
      </p>
      <p>
        <input type="password" placeholder="New Password" />
      </p>
      <p><button>Submit</button></p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
    </div>
  );
}

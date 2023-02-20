import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share
          <br /> with the people in your life.
        </div>
      </div>
      <div className="LoginContainer">
        <div className="Logindetails">
          <input type="email" placeholder="Email addres or phone number" />
          <br />
          <input type="Password" placeholder="Password" />
          <br />
          <button className="btn">
            <h4>Login</h4>
          </button>
        </div>
        <div className="forget">
          <a href="forget">Forgetting Password</a>
          <br />
          <button className="btns">Create account</button>
        </div>
        <p></p>
        <br />
        <div className="page">
          <a href="createpage">
            <b>Create a Page</b>
          </a>
          for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
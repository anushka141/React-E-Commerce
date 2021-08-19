import React from "react";
import "./App.css";

function Login() {
  return (
    <div className="App">
      <section className=" login-style">
        <div class="logo" id="login-page-logo">
          <img src="" alt="" />
        </div>

        <div class="container" id="login-container">
          <form action="">
            <div class="name-tag" id="email-tag">
              <label for="email">
                Email : <br />{" "}
              </label>
              <input type="email" placeholder="Enter Your Email." />
            </div>
            <div class="name-tag" id="password-tag">
              <label for="password">
                Password : <br />{" "}
              </label>
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <div class="button" id="login-button">
              <button>LOGIN</button>
            </div>
          </form>
        </div>

        <div class="text" id="sign-up-text">
          <p>New to 3Shoe1 ?</p>
        </div>

        <div class="button" id="sign-up-button">
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default Login;

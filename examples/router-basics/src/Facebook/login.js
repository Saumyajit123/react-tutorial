import "./login.css";
import { useNavigate, BrowserRouter, Routes } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div class="split">
          <div class="left">
            <h1>facebook</h1>
            <h3>
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
          <div class="right">
            <div class="loginPage">
              <form>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="password" placeholder="Password" />
                <button>Log in</button>
              </form>
              <p>Forgotten password?</p>
              <hr />
              <div class="createAccount">
                <button onClick={() => navigate("/register")}>
                  Create new Account
                </button>
              </div>
            </div>
            <span>
              <b>Create a Page</b> for a celebrity, brand or business.
            </span>
          </div>
    </div>
  );
}

export default Login;

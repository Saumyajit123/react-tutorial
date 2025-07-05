import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div class="Head">
      <h1>facebook</h1>
      <div class="formContainer">
        <div class="boxContainer">
          <h1>Create a new account</h1>
          <p>It's quick and easy.</p>
          <hr />
          <div class="main">
            <div class="gridContainer">
              <div>
                <input
                  style={{padding: "5px 2px"}}
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div>
                <input
                  style={{padding: "5px 2px"}}
                  type="text"
                  placeholder="Surname"
                />
              </div>
            </div>
            <p class="dob">Date of birth</p>
            <div class="dobGrid">
              <select
                name="Day"
                id="day"
                style={{padding: "5px 2px", borderRadius: "5px"}}
              >
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select
                name="Month"
                id="month"
                style={{padding: "5px 2px", borderRadius: "5px"}}
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
              </select>
              <select
                name="Year"
                id="year"
                style={{padding: "5px 2px", borderRadius: "5px"}}
              >
                <option>Year</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
            <p class="gender">Gender</p>
            <div class="common">
              <div class="genderGrid">
                <div class="female border">
                  <span>Female</span>
                  <input type="radio" value="F" required />
                </div>
                <div class="male border">
                  <span>Male</span>
                  <input type="radio" value="M" required />
                </div>
                <div class="custom border">
                  <span>Custom</span>
                  <input type="radio" value="C" required />
                </div>
              </div>
              <br />
              <div class="gridmobMail">
                <input
                  style={{width: "96%", padding: "5px"}}
                  type="tel email"
                  placeholder="Mobile number or email address"
                />
              </div>
              <div class="gridPassword">
                <input
                  style={{width: "96%", padding: "5px"}}
                  type="password"
                  placeholder="New password"
                />
              </div>
            </div>

            <br />

            <br />
            <button class="button" style={{width: "50%"}}>
              Sign up
            </button>
            <Link to='/'><h3 class="Already">Already have an account?</h3></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

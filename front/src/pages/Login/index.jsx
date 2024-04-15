import { Link } from "react-router-dom";
import "../Login/login.css";

function Login() {
  return (
    <div className="login flex">
      <div className="login-card">
        <div className="imge flex-center">
          <h2>Login</h2>
        </div>
        <form className="flex column ">
          <div>
            <input type="email" name="email" placeholder="Email..." />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="orr flex-center">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <div>
          <i className="fa-brands fa-square-facebook"></i>{" "}
          <span className="by-fb">Login with Facebook</span>
        </div>
        <div className="flex go-signup">
          <p>Don't have an account?</p>
          <span>
            <Link to={"/signup"}>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

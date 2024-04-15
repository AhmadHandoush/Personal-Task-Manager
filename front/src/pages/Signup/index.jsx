import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  return (
    <div className="signup flex-center">
      <div className="signup-card">
        <div className="img flex-center">
          <h2>Signup</h2>
        </div>
        <p className="top-p">
          Sign up to see photos and videos from your friends.
        </p>
        <div className="orr flex-center">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <form className="form flex column">
          <div>
            <input type="text" name="name" placeholder="Username" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email..." />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <p className="people">
            People who use our service may have uploaded your contact
            information to Instagram. <span className="learn">Learn more</span>
          </p>
          <button type="submit">Signup</button>
        </form>
        <p className="to-login">
          Have an account? <Link to={"/"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

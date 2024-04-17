import { Link } from "react-router-dom";
import "../Login/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );

      console.log("login successful:", response.data);
      if (response.data.status === "Success") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error login:", error.message);
    }
  };
  return (
    <div className="login flex">
      <div className="login-card">
        <div className="imge flex-center">
          <h2>Login</h2>
        </div>
        <form className="flex column " onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
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

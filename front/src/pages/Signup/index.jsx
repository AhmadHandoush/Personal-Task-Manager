import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
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
        "http://localhost:3001/register",
        formData
      );

      console.log("Signup successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  return (
    <div className="signup flex-center">
      <div className="signup-card">
        <div className="img flex-center">
          <h2>Signup</h2>
        </div>

        <form className="form flex column" onSubmit={() => handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

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

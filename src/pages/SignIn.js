import { useState } from "react";
import axiosInstance from "./axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignIn = (e) => {
  const [username, Setusername] = useState("");
  const [pass, Setpass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("token/", {
        username: username,
        password: pass,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = 
            'JWT ' + localStorage.getItem('access_token');
        navigate('/')
      });
  };
  return (
    <div className="formContainer">
      <h1>SignIn</h1>
      <form action="" onSubmit={handleSubmit} className="signInform">
        <label htmlFor="Username">Username</label>
        <input
          value={username}
          onChange={(e) => Setusername(e.target.value)}
          type="text"
          placeholder="Username..."
          id="username"
          name="username"
        />
        <label htmlFor="Password">Password</label>
        <input
          value={pass}
          onChange={(e) => Setpass(e.target.value)}
          type="password"
          placeholder="Password....."
          id="password"
          name="password"
        />
        <button type="submit">SignIn</button>
      </form>
      <br />
      <hr />
      <p>
        {" "}
        Dont have an account? <Link to="/signUp">SignUp</Link>{" "}
      </p>
    </div>
  );
};

export default SignIn;

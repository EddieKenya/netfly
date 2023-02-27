import { useState } from "react";
import axiosInstance from "./axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = (e) => {
  const [username, Setusername] = useState("");
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    axiosInstance
      .post("register/", {
        username: username,
        email: email,
        password: pass,
      })
      .then((res) => {
        navigate('/signIn')
      
      });
  };
  return (
    <div className="formContainer" >
      
      <h1>Sign Up Now</h1>
      <form action="" onSubmit={handleSubmit} className='signInform' >
        <label htmlFor="Username">Username</label>
        <input
          value={username}
          onChange={(e) => Setusername(e.target.value)}
          type="text"
          placeholder="Username..."
          id="username"
          name="username"
        />
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          onChange={(e) => Setemail(e.target.value)}
          type="email"
          placeholder="Youremail@gmail.com"
          id="email"
          name="email"
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
        <button type="submit">SignUp</button>
      </form>
      <br />
      <hr />
      <p> Already have an account? <Link to='/signIn'>SignIn</Link> </p>
    </div>
  );
};

export default SignUp;

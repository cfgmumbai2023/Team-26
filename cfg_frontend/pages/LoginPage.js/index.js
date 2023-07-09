import React, { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";

// import styles from "../../styles/login.module.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const Navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       Navigate("/");
//     }
//   });

//   const handleLogin = async () => {
//     console.log(email, password);

//     let result = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     result = await result.json();

//     if (result.name) {
//       localStorage.setItem("user", JSON.stringify(result));
//       Navigate("/");
//     } else {
//       alert("Invalid Credentials");
//     }

//     console.log(result);
//   };

  return (
    <div className="h-screen signin-form">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="signin_input"
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        className="signin_input"
      />
      <input
        type="button"
        value="Login"
        id="signin_submit"
        // onClick={handleLogin}
      />
    </div>
  );
};

export default Login;
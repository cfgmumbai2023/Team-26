import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("organization");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="organization"
                checked={userType === "organization"}
                onChange={handleUserTypeChange}
              />
              Organization
            </label>
            <label>
              <input
                type="radio"
                value="school"
                checked={userType === "school"}
                onChange={handleUserTypeChange}
              />
              School
            </label>
            <label>
              <input
                type="radio"
                value="student"
                checked={userType === "student"}
                onChange={handleUserTypeChange}
              />
              Student
            </label>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

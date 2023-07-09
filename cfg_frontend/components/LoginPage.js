import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userType", userType);

    if (userType == "organization") {
      router.push("/organization");
    }
    if (userType == "school") {
      router.push("/school");
    }
    if (userType == "teacher") {
      router.push("/teacher");
    }

    // Handle login logic here
  };

  return (
    <div className={styles["login-page"]}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor={styles["username"]}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles["form-group"]}>
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
                value="teacher"
                checked={userType === "teacher"}
                onChange={handleUserTypeChange}
              />
              Teacher
            </label>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

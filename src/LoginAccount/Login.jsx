import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initFormValue = {
  email: "",
  password: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default function Login() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.username)) {
      error["username"] = "username is required";
    } else {
      if (!isEmailValid(formValue.username)) {
        error["username"] = "username is invalid";
      }
    }

    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );

      // Handle successful response
      if (
        response.status === 200 &&
        response.data.data.role === "SUPER-ADMIN"
      ) {
        console.log("Login successful", response.data.data.role);
        navigate("/boss");
        const token = response.data.data.access_token;
        const userId = response.data.data.id;
        const role = response.data.data.role;

        // Lấy _id của người dùng
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);
      } else if (
        response.status === 200 &&
        (response.data.data.role === "ADMIN" ||
          response.data.data.role === "EMPLOYEE")
      ) {
        console.log("Login successful", response.data.data.role);
        navigate("/service");
        const token = response.data.data.access_token;
        const userId = response.data.data.id; // Lấy _id của người dùng
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        const role = response.data.data.role;
        localStorage.setItem("role", role);

        console.log(userId);
      } else {
        alert("Login failed");
      }

      // If you need to do something with the response, handle it here
    } catch (error) {
      // Handle error
      console.error("Login failed", error);

      // You might want to display an error message to the user or take other actions
    }
  };
  console.log(formError);

  return (
    <div className="Login-page">
      <div className="Login-form-container">
        <h1 className="title">Đăng nhập tài khoản của bạn:</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Tên đăng nhập
            </label>
            <input
              id="username"
              name="username"
              className="form-control"
              placeholder="Nhập username"
              value={username}
              onChange={handleChangeUsername}
            />
            {formError.username && (
              <div className="error-feedback">{formError.username}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Nhập password"
              value={password}
              onChange={handleChangePassword}
            />
            {formError.password && (
              <div className="error-feedback">{formError.password}</div>
            )}
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Đăng nhập ngay
          </button>
        </form>
      </div>
    </div>
  );
}
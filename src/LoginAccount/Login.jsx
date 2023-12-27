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

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
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
      )
    
      // Handle successful response
      if(response.status === 200 && response.data.data.role === 'SUPER-ADMIN' ) {
      console.log("Login successful", response.data.data.role);
      navigate('/boss')
      }
      else if  (response.status === 200 && (response.data.data.role === 'ADMIN' || response.data.data.role ==='Employee')){
        // const token = response.data.data.access_token;
        // console.log(token) // Store the token in localStorage or sessionStorage
        // localStorage.setItem("token", token);
        console.log("Login successful", response.data.data.role);
        navigate('/service')
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
        <h1 className="title">Login account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              // type="email"
              name="email"
              className="form-control"
              placeholder="Nhập email"
              value={username}
              onChange={handleChangeUsername}
            />
            {formError.email && (
              <div className="error-feedback">{formError.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
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
            Login
          </button>
          <Link to="/RegisterAccount">
            <div className="register">Chưa có tài khoản, Đăng ký ngay</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
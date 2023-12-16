import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const initFormValue = {
    email: "",
    password: "",
};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export default function Login() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm =() => {
        const error = {};

        if(isEmptyValue(formValue.email)) {
            error["email"]= "Email is required";
        }else{
            if(!isEmailValid(formValue.email)) {
                error["email"]= "Email is invalid";
            }
        }

        if(isEmptyValue(formValue.password)) {
            error["password"]= "Password is required";
        }

        setFormError(error);


        return Object.keys(error).length === 0;
    }


    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormValue ({
            ...formValue,
            [name]: value,
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            console.log("form value",formValue)
        }else {
            console.log("form invalid")
        }


        console.log("form value",formValue)
    }
    console.log(formError);

    return <div className="Login-page">
        <div className="Login-form-container">
            <h1 className="title">Login account</h1>
            <form onSubmit={handleSubmit} >
                    


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
                            value={formValue.email}
                            onChange={handleChange}

                        />
                        {formError.email &&
                        <div className="error-feedback">{formError.email}</div>}
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
                            value={formValue.password}
                            onChange={handleChange}

                        />
                        {formError.password &&
                        <div className="error-feedback">{formError.password}</div>}
                    </div>

                    <Link to="/UserPage" >
                    <button type="submit" className="submit-btn">
                        Login
                    </button>     
                    </Link>


                    <Link to="/RegisterAccount" >
                        <div className="register">
                            Chưa có tài khoản, Đăng ký ngay 
                        </div>
                    </Link>                
                    
                
            </form>
        </div>
    </div>;
}
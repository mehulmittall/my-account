import React, {useEffect, useState,useId} from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

import "../Styles/signin.css"

const Register = () => {

 
    const initialValues = { username: "", email: "", password: "" };
    const email = useId();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [msg, setMsg] = useState('');
     const history = useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/users', {
            id:email,
            name: initialValues.name,
            email: initialValues.email,
            password:initialValues.password ,
            department:initialValues.department,
            gender:initialValues.gender,
            dob:initialValues.dob
        });
        history.push("/");
    } 
    catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
}
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="container">
       
  
        <form onSubmit={handleSubmit}>
          <h1>SignIn Form</h1>
          <br />
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
                <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
                <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            
            <div className="signup-button">
            <button className="fluid ui button blue left-button">
              Register
            </button>
            <button className="fluid ui button blue right-button">
              <Link to="/signup">Already have account?</Link>
            </button>
          </div>

          </div>
        </form>
      </div>
    );
  }

export default Register;
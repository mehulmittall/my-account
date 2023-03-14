import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/signup.css";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repass: "",
    department: "",
    gender: "",
    dob: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

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

    if (!values.department) {
      // console.log(values.department);
      errors.department = "Department is required";
    }
    if (!values.gender) {
      errors.gender = "Please select your gender";
    }
    if (!values.repass) {
      errors.repass = "Password can not be empty";
    } else if (values.password != values.repass) {
      errors.repass = "Password must be same";
    }
    if (!values.dob) {
      errors.dob = "select your date of birth";
    }

    return errors;
  };

  return (
    <div className="container signup">
      <form onSubmit={handleSubmit} className="signup-container">
        <h1>SignUp Form</h1>
        <br />
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            {/* <label>Username</label>
            <br /> */}
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
            {/* <label>Email</label>
            <br /> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field" style={{ paddingTop: "20px" }}>
            {/* <label style={{ color: "black" }} htmlFor="department">
              Department
            </label> */}
            {/* <input
              type="text"
              name="department"
              placeholder="Department"
              value={formValues.department}
              onChange={handleChange}
            /> */}

            <div>
              <select
                name="department"
                id="department"
                onChange={handleChange}
                className="department-select"
              >
                <option value="">select</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Management">Management</option>
              </select>
            </div>
          </div>
          <p>{formErrors.department}</p>

          <div className="field" style={{ paddingTop: "20px" }}>
            {/* <label style={{ color: "black" }} htmlFor="gender">
              Gender
            </label> */}
            <div>
              <select
                name="gender"
                id="gender"
                onChange={handleChange}
                className="department-select"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <p>{formErrors.gender}</p>

          <div className="field">
            <br />
            {/* <label>Date of Birth</label>
            <br /> */}
            <input
              type="date"
              name="dob"
              placeholder="date of birth"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.dob}</p>

          <div className="field">
            <br />
            {/* <label>Password</label>
            <br /> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <br />
            {/* <label>Re-Enter Password</label>
            <br /> */}
            <input
              type="password"
              name="repass"
              placeholder="Re-enter Password"
              value={formValues.repass}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.repass}</p>

          <div className="signup-button">
            <button className="fluid ui button blue left-button">
              Register
            </button>
            <button className="fluid ui button blue right-button">
              
              {/* <a href=""> Already have account?</a> */}
              <Link to="/">Already have account?</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
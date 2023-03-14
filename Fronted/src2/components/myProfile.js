import React, {useState} from 'react';
import form from "../Styles/myProfile.css";



export default function Form() {
    const [name,setName]= useState('');
    const[age,setAge]= useState("");
    const[email,setEmail]=useState("");
    const [checked, setChecked] = useState([]);
    const [Contact, setContact] = useState("");
    const [formValues, setFormValues] = useState();
  
    const nameHandler = (e) =>{
       setName(e.target.value);
    }
    const ageHanlder =(e)=>{
        setAge(e.target.value);
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const contactHandler=(e)=>{
        setContact(e.target.value);
    }
    
    
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
    
      // Generate string of checked items
      const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
          })
        : "";
    
      // Return classes based on whether item is checked
      var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";


    const handleSubmit=(e)=>{
        e.preventDefault();
        
      }

         return (
      <div className="container">
        <form onSubmit={handleSubmit} className="signin-container">
          <h1>Welcome to Profile page</h1>
          <br />
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <br />
            <input 
              type="text" 
              value={name} 
              placeholder='Name'
              required 
              onChange={(e)=> {nameHandler(e)}} 
              />    
            </div>

            <div className="field">
                <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>{emailHandler(e)}}
              />
            </div>
          
            <div className="field">
                <br />
              <label>Age</label>
              <br />
              <input
                type="number"
                name="Age"
                placeholder="Age"
                value={age}
                onChange={(e)=>{ageHanlder(e)}}
              />
            </div>


            <div className="field">
                <br />
              <label>Contact</label>
              <br />
              <input
                type="number"
                name="Contact"
                placeholder="Contact"
                value={Contact}
                onChange={(e)=>{contactHandler(e)}}
              />
            </div>

            {/* <div className="field">
            <br />
            {/* <label>Date of Birth</label>
            <br /> */}
            {/* <input
              type="date"
              name="dob"
              placeholder="date of birth"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div> */} 

            <div className="field">
                <br />
                <label>Department</label>
                <select
                name="department"
                id="department"
                onChange={handleSubmit}
                className="department-select"
              >
                <option value="">select</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Management">Management</option>
              </select>
            </div>

            <div className="field">
                <br />
                <label>Gender</label>
                <select
                name="gender"
                id="gender"
                onChange={handleSubmit}
                className="department-select"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
    );
  }
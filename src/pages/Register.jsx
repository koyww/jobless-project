import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";


function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    phone: "",
    status: "",
  }); 

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value,});
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      dob,
      phone,
      status,
    } = form; 

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !gender ||
      !dob ||
      !phone ||
      !status
    ) {
    
      setError("Please fill in all fields you inbred Shit!");

    return;
  }

    const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  console.log("Saved user:", data);
  
  setSuccess('Success! your account has been created');
  setError("");
  };

  const onNavigate = () =>{
    navigate('/');
  }

  return (
    <div className="register">

      <form onSubmit={handleRegister} className="register-form">

        <h2 className="register-title">Register</h2>

      <div className="name-row">
        <input className="register-input"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input className="register-input"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>

        <input className="register-input"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input className="register-input"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

         

      <div className="name-row">
        <select name="gender" value={form.gender} onChange={handleChange}  className="register-input" >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="gay">Gay as Fuck!</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}  className="register-input">
          <option value="">Select Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
          <option value="lebron">Lebron James</option>
        </select>
      </div>

        <input className="register-input"
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
        />

        <input className="register-input"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

        <button type="submit" className="register-button">Register</button>
        <p className="register-text">Have already an account? <Link to="/" className="register-link">Login here</Link></p>

        {success && <p style={{ color: "green" }}>{success}</p>
      && <button onClick={onNavigate} className="continue-button">Continue</button>
      }

        {error && <p style={{ color: "red" }}>{error}</p>}

      </form>
    
      
    </div>
  );
}

export default Register;
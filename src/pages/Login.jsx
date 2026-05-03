import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
    setError("Please fill in all fields you inbred Shit!");
    return;
  }


  const res = await fetch("/jobless-project/users.json");
  const users = await res.json();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    setError("");
    console.log("Login success:", user);
      login(user);


    navigate("/");
  } else {
    console.log("Invalid credentials");
     setError("Invalid credentials");
  }
  };

  return (
    <div className="login">

      <div className="login-welcome">
        <h2 className="login-cursive">Welcome to The Jobstreet:<br/> Unemployment</h2>
        <p >Dalawang beses na yan!! Unang una pinagtanggol kita sa lahat ng tropa<br/> 
         ha Kahit takpan mo pa yang mukha mo ha ilalabas ko 'to dahil isa kang gago!!<br/> 
          Dito ka pa nakatira sa bahay ko, pinapatira kita, tinuring kitang ka- kaibigan<br/> 
          'tol! Ha? Kahit anong sabihin mo 'tol I don't know what the fuck you did.<br/> 
           Sumisigaw yung anak ko sa taas " Daddy daddy daddy" Sabi ko "Anak baket?" <br/> 
           Ha? "Si tito Badang hindi ko alam nakatayo na lang jan hawak hawak yung kamay<br/> 
            ko" GAGO KA BA?? Sisirain kita ngayon, yang pangalan mo? PUTANG INA MO!!!<br/> 
             *Nagpunas si badang ng sugat.* LUMAYAS KA!!! TANGINA MO!</p>
      </div>


      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <input className="login-input" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">Login</button>
        
        <p className="login-text">Not registered? <Link to="/register" className="login-link">create an account</Link></p>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      
    </div>
  );
}

export default Login;


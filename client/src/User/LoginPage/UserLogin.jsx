import { useState } from 'react';
import "./loginpage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [ value, setValue] = useState({
    user_email: "",
    user_password: "",
});

const [error, setError] = useState(null);

const navigate = useNavigate();
axios.defaults.withCredentials = true;

const handleSubmit = (event) => {
    event.preventDefault();
    if (value.user_email.trim() === '' || value.user_password.trim() === '') {
        // If email or password is empty, do not proceed with login
        return;
    }
    axios.post("http://localhost:3000/auth/user-login", value)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate("/");
            } else {
                setError(result.data.Error)
            }
            
        })
        .catch(err => console.log(err));
};
  return (
    <div className="loginPage">
      <div className="formContainer">
      <div className='text-warning'>
                {error && error}
            </div>
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="email"
            required
            minLength={3}
            maxLength={50}
            type="email"
            placeholder="Email"
            onChange={(e) => setValue({...value, user_email: e.target.value})}
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setValue({...value, user_password: e.target.value})}
          />
          <button>Login</button>
          <Link to="/sign-up">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default UserLogin;

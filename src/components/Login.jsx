import React, { useState } from 'react';
import '../styles/form.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  function handleLogin(event) {
    const {id, value} = event.target;
    setLogin(prevState => ({...prevState, [id]: value}));
  }

  function handleSubmission(event) {
    event.preventDefault();
    // lets get the saved users in the local storage
    const users = JSON.parse(localStorage.getItem('userDetail'));
    // lets filter the db and see if the user exist in the db
    const existingUsers = users.find((user) => user.email === login.email &&
    user.password === login.password);
    if (!existingUsers) {
        alert("Invalid email or password!!!");
        return;
    }
    alert("login successful");
    // lets redirect to the dashboard
    window.location.href = '/';
  }
  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <div className="login">
        <form action="" onSubmit={handleSubmission}>
          <label htmlFor="email" className='email'>Email</label>
          <input 
            type="email" 
            id="email" 
            value={login.email}
            onChange={handleLogin}
            required
          />
          <label htmlFor="password" className='password'>Password</label>
          <div className="password-container">
            <input 
              type={showPassword ? 'text' : 'password'} 
              id="password" 
              className="password"
              value={login.password}
              onChange={handleLogin}
              required
            />
            <i 
              className="fa fa-eye" 
              aria-hidden="true" 
              onClick={handlePasswordToggle}
            ></i>
          </div>

          <button type="submit">Submit</button>
        </form>
        <div className="already">
        <p>Not yet a member? <Link to="/register">Register</Link></p>
      </div>
      </div>
    </div>
  );
}

export default Login;

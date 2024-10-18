import React, { useState } from 'react';
import '../styles/form.css';
import { countries } from '../dummy/country';
import { Link } from 'react-router-dom';

const db = [];
const Register = () => {
  const [register, setRegister] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    timeOfArrival: '',
    yearsOfExperience: '',
    country: '',
    bio: '',
  });

  const [checked, setChecked] = useState(false);

  function handleRegistration(event) {
    const { id, value } = event.target; 
    setRegister((prev) => {
      return { ...prev, [id]: value }; 
    });
  }

  function handleCheck() {
    setChecked(!checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!checked) {
      alert("Please agree to our terms and conditions");
      return; 
    }
  // Retrieve existing user details from localStorage
  const existingData = localStorage.getItem('userDetail');
  const userDetails = existingData ? JSON.parse(existingData) : [];

  if (!Array.isArray(userDetails)) {
    userDetails = [];
  }
  // Push the new register object into the array
  userDetails.push(register);

  // Save the updated array back to localStorage
  localStorage.setItem('userDetail', JSON.stringify(userDetails));

  console.log(userDetails);
    setRegister({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      gender: '',
      dateOfBirth: '',
      timeOfArrival: '',
      yearsOfExperience: '',
      country: '',
      bio: '',
    });
    setChecked(false); // Reset the checkbox after submission if needed
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname" className='firstname'>First Name</label>
        <input 
          type="text" 
          id="firstname" 
          onChange={handleRegistration}
          value={register.firstname}
          required
        />

        <label htmlFor="lastname" className='lastname'>Last Name</label>
        <input 
          type="text" 
          id="lastname" 
          onChange={handleRegistration}
          value={register.lastname}
        />

        <label htmlFor="username" className='username'>Username</label>
        <input 
          type="text" 
          id="username" 
          onChange={handleRegistration}
          value={register.username}
        />

        <label htmlFor="email" className='email'>Email</label>
        <input 
          type="email" 
          id="email" 
          onChange={handleRegistration}
          value={register.email}
          required
        />

        <label htmlFor="password" className='password'>Password</label>
        <input 
          type="password" 
          id="password" 
          onChange={handleRegistration}
          value={register.password}
          required
        />

        <label htmlFor="gender" className='gender'>Gender</label>
        <select 
          id="gender" 
          onChange={handleRegistration}
          value={register.gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="dateOfBirth" className='dateOfBirth'>Date of Birth</label>
        <input 
          type="date" 
          id="dateOfBirth" 
          onChange={handleRegistration}
          value={register.dateOfBirth}
        />

        <label htmlFor="timeOfArrival" className='timeOfArrival'>Time of Arrival</label>
        <input 
          type="time" 
          id="timeOfArrival" 
          onChange={handleRegistration}
          value={register.timeOfArrival}
        />

        <label htmlFor="yearsOfExperience" className='yearsOfExperience'>Years Of Experience</label>
        <input 
          type="number" 
          id="yearsOfExperience" 
          onChange={handleRegistration}
          value={register.yearsOfExperience}
        />

        <label htmlFor="country" className='country'>Select Country</label>
        <select 
          id="country" 
          onChange={handleRegistration}
          value={register.country}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.code} {country.name}
            </option>
          ))}
        </select>

        <label htmlFor="bio">Bio</label>
        <textarea 
          id="bio" 
          rows="4" 
          cols="50"
          onChange={handleRegistration}
          value={register.bio}
        ></textarea>

        <div className='consent'>
          <input 
            type="checkbox" 
            className="terms" 
            checked={checked} 
            onChange={handleCheck} 
          />
          <p>I consent to the Terms & Conditions</p>
        </div>

        <button type='submit' className='submit' disabled={!checked}>
          Submit
        </button>
      </form>

      <div className="already">
        <p>Are you a registered user already? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

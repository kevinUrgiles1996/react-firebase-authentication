import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Spinner from '../spinner.svg';


export const Login = () => {

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 1500);
    }
  }


  return (
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{error}</p>}
        <h1>Log In</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' onChange={handleEmail} />
          <input type='password' placeholder='Password' onChange={handlePassword} />
          <input type='submit' value='Log In' />
        </form>
        {loading && <img src={Spinner} alt='Loading' />}
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>
      </div>

    </div>
  )
}

import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation;
      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value); 
    }

    const handPasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace : true});
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handPasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <div className="form-submit">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <p>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
               <div className='design'>
               <div className='margin'><p>.</p></div>
                <p className='or'>or</p>
                <div className='margin'>.</div>
               </div>
               <button className='button'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;
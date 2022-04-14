import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] =useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('your two password did not match');
            return;
        }
        if(password.length <6){
            setError('password must be six character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
        <div>
            <h3 className='form-title'>SignUp</h3>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmBlur} type="password" name="confirm-password" id="" required />
                </div>
                <p style={{color:'red'}}>{error}</p>
              
                <div className="form-submit">
                    <input type="submit" value="SignUp" />
                </div>
            </form>
            <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;
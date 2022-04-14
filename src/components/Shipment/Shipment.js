import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handleConfirmBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
    
    }

    return (
        <div>
            <div className='form-container'>
        <div>
            <h3 className='form-title'>Shipping information:</h3>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input onBlur={handleConfirmBlur} type="number" name="phone" id="" required />
                </div>
                <p style={{color:'red'}}>{error}</p>
              
                <div className="form-submit">
                    <input type="submit" value="Add shipping" />
                </div>
            </form>
          
           <div className='design'>
           <div className='margin'><p>.</p></div>
            <p className='or'>or</p>
            <div className='margin'>.</div>
           </div>
           <button className='button'>Continue with google</button>
        </div>
    </div>
        </div>
    );
};

export default Shipment;
import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
    };
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/PK-en-20250127-TRIFECTA-perspective_217df22c-add3-44dc-859a-686d5f6f5026_medium.jpg" 
                alt="background-image" 
            />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
            )}
            <input type="text" ref={email} placeholder="Enter Your Email" className='p-4 my-4 w-full bg-gray-700' />
            <input type="password" ref={password} placeholder="Enter Your Password" className='p-4 my-4 w-full bg-gray-700' />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login
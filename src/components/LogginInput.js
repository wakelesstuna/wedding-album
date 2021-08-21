import React from "react";

const LogginInput = ({ setIsLoggedIn, setShowInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === process.env.REACT_APP_USERNAME &&
      e.target.password.value === process.env.REACT_APP_PASSWORD
    ) {
      setIsLoggedIn(true);
      setShowInput(false);
    }
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <input
          className='loginFormInput'
          type='text'
          id='username'
          name='username'
          placeholder='Username'
        />
        <input
          className='loginFormInput'
          type='password'
          id='password'
          name='password'
          placeholder='Password'
        />
        <input className='submit' type='submit' value='Sign in' />
      </form>
    </div>
  );
};

export default LogginInput;

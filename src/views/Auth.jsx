import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMsg('Oops, something went wrong. Please try again.');
    }
  };

  return (
    <div className="Auth">
      <AuthForm
        type={type}
        setType={setType}
        errorMsg={errorMsg}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

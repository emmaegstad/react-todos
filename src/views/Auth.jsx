import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Auth() {
  const [type, setType] = useState('signin');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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

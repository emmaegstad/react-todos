import './AuthForm.css';
import React from 'react';
import classNames from 'classnames';

export default function AuthForm({
  type,
  setType,
  errorMsg,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <div className="AuthForm">
      <header className="auth-header">
        <span
          className={classNames({ active: type === 'signin' })}
          onClick={() => {
            setType('signin');
          }}
        >
          Sign-in
        </span>
        <span
          className={classNames({ active: type === 'signup' })}
          onClick={() => {
            setType('signup');
          }}
        >
          Sign-up
        </span>
      </header>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          className="text-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          className="text-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input className="form-button" type="submit" />
        <span className="error-msg">{errorMsg}</span>
      </form>
    </div>
  );
}

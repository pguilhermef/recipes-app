import React from 'react';
import LoginSection from '../components/LoginSection';
import '../styles/index.css';

export default function Login() {
  return (
    <main className="login-page align-content-center recipes-bg">
      <section
        className="container-fluid bg-login"
      >
        <div
          className="row justify-content-center align-items-center"
        >
          <LoginSection />
        </div>
      </section>
    </main>
  );
}

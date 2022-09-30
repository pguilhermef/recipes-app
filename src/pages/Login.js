import React from 'react';
import LoginSection from '../components/LoginSection';
import '../styles/Login.css';

export default function Login() {
  return (
    <main className="align-content-center recipes-bg">
      <section
        className="container-fluid bg-login"
      >
        <div className="align-form row justify-content-center align-items-center h100">
          <LoginSection />
        </div>
      </section>
    </main>
  );
}

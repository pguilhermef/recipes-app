import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import restaurantLogo from '../images/Logo.png';
import emailInput from '../images/email.png';
import passwordInput from '../images/padlock.png';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const history = useHistory();
  // const { addEmail } = useContext(appReceitasContext);
  // console.log(addEmail);

  useEffect(() => {
    const Validation = () => {
      const regex = /\S+@\S+\.\S+/;
      if (password.length >= Number('7') && regex.test(email)) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    };
    Validation();
  }, [email, password]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  const handleClick = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ email }),
    );
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('drinksToken', 1);
    // addEmail(email);

    history.push('/meals');
  };

  return (
    <form
      className="col-10 col-md-6 col-lg-4 rounded-3 p-4 shadow"
      style={ { maxWidth: '400px', background: 'white', marginTop: '35%' } }
    >
      <img
        src={ restaurantLogo }
        alt="Wallpaper"
        className="img-fluid mx-auto d-block"
        style={ { maxHeight: '150px' } }
      />
      <div className="input-group my-3">
        <span className="input-group-text" style={ { background: '#FF9900' } }>
          <img
            src={ emailInput }
            alt="email input"
            style={ { maxWidth: '20px' } }
          />
        </span>
        <input
          type="email"
          value={ email }
          id="input-email"
          data-testid="email-input"
          name="email"
          className="form-control"
          onChange={ handleChange }
          placeholder="Email"
        />
      </div>
      <div className="input-group my-3">
        <span className="input-group-text" style={ { background: '#FF9900' } }>
          <img
            src={ passwordInput }
            alt="password input"
            style={ { maxWidth: '20px' } }
          />
        </span>
        <input
          type="password"
          value={ password }
          id="input-password"
          data-testid="password-input"
          name="password"
          className="form-control"
          onChange={ handleChange }
          placeholder="Senha"
        />
      </div>
      <button
        disabled={ isDisable }
        type="button"
        onClick={ handleClick }
        data-testid="login-submit-btn"
        className={
          `btn btn-md d-block mx-auto my-3 col-5 button-theme-bg
              ${isDisable && 'disabled'}`
        }
        style={ { backgroundColor: '#FF9900' } }
      >
        Enter
      </button>
    </form>
  );
}

// LoginSection.propTypes = {
//   history: PropTypes.func,
// }.isRequired;

export default LoginSection;

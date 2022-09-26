import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import appReceitasContext from '../context/appReceitasContext';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
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
    <div>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={ email }
            id="input-email"
            data-testid="email-input"
            name="email"
            onChange={ handleChange }
            placeholder="alguem@gmail.com"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="senha"
            value={ password }
            id="input-password"
            data-testid="password-input"
            name="password"
            onChange={ handleChange }
            placeholder="senha"
          />
        </label>
        <button
          disabled={ isDisable }
          type="button"
          onClick={ handleClick }
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Login;

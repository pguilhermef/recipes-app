import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');

  const addEmail = useCallback((value) => {
    setLoginEmail(value);
  }, []);

  // const contextValue = {
  //   addEmail,
  //   loginEmail,
  // };

  const contextValue = useMemo(() => ({
    addEmail,
    loginEmail,
  }), [addEmail, loginEmail]);

  return (
    <AppReceitasContext.Provider
      value={ contextValue }
    >
      { children }
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;

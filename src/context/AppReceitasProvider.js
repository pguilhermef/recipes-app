import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [pathname, setPathname] = useState();
  const [filteredList, setfilteredList] = useState();

  const addEmail = useCallback((value) => {
    setLoginEmail(value);
  }, []);

  const fetchIngredientsAPIs = useCallback(async (ingredient, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    const result = await response.json();
    setfilteredList(result);
  }, []);

  const fetchNameAPIs = useCallback(async (name, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(url);
    const result = await response.json();
    setfilteredList(result);
  }, []);

  const fetchFirstLeatterAPIs = useCallback(async (firstLeatter, typeOfFood) => {
    const url = `https://www.the${typeOfFood}db.com/api/json/v1/1/search.php?f=${firstLeatter}`;
    const response = await fetch(url);
    const result = await response.json();
    setfilteredList(result);
  }, []);

  const passPathName = useCallback((pathnameParam) => {
    setPathname(pathnameParam);
  }, []);

  const contextValue = useMemo(() => ({
    addEmail,
    loginEmail,
    fetchIngredientsAPIs,
    fetchNameAPIs,
    fetchFirstLeatterAPIs,
    filteredList,
    passPathName,
    pathname,
  }), [addEmail, loginEmail, fetchIngredientsAPIs,
    fetchNameAPIs, fetchFirstLeatterAPIs, filteredList, passPathName, pathname]);

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

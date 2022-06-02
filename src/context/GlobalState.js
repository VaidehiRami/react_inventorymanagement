import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state
const initialState = {product: []}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addProduct(product) {
    dispatch({
      type: 'ADD_Product',
      payload: product
    });
  }

  return (<GlobalContext.Provider value={{
    product: state.product,
    addProduct
  }}>
    {children}
  </GlobalContext.Provider>);
}
import React from 'react';

import Home from '../pages/Home';
import Cart from '../menu/Cart';
import { Provider } from 'react-redux';
import Store from '../store/Store';


const Appmenu = () => {
  return (
    <>
    
      <Provider store={Store}>
       
        <Home />
        
        <Cart />
        
        
  </Provider>
    </>
  );
};

export default Appmenu;
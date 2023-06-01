import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";

import { Provider } from 'react-redux';
import  {store,persistor}  from "./redux/store"

import firebaseConfig from"./firebase" 

import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider   store={store}>
      <PersistGate loading={"loading"} persistor={persistor}  >
           <App />
      </PersistGate>
  </Provider>
);



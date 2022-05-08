import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Client from 'shopify-buy';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = Client.buildClient({
  storefrontAccessToken:'760d906d07c30f524b1fd94bb7b91b0a',
  domain:'forest-green-project.myshopify.com'
})
root.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

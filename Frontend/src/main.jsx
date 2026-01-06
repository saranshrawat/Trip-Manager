import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import { Provider } from 'react-redux';
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import store from './redux/store/Store.js';
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider
  domain={import.meta.env.VITE_AUTH0_DOMAIN}
  clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
  authorizationParams={{
    redirect_uri: window.location.origin// optional
  }}
>


    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

    </Auth0Provider>
  </StrictMode>,
)

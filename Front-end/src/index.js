import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Componets/Pages/Home';
import Shop from './Componets/Pages/Shop';
import Profile from './Componets/Pages/Profile';
import Cart from './Componets/Pages/Cart';
import Contact from './Componets/Pages/Contact';
import Social from './Componets/Pages/Social';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <Home />
},
{
  path: '/shop',
  element: <Shop/>
},
{
  path: '/social',
  element: <Social/>
},
{
  path: '/contact',
  element: <Contact/>
},
{
  path: '/cart',
  element: <Cart/>
},
{
  path: '/profile',
  element: <Profile/>
},
])



root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './cadastro'
import Reset from './reset';
import Principal from './principal';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/reset",
    element: <Reset/>,
  },
  {
    path: "/principal",
    element: <Principal/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


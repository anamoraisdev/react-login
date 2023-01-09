import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Login from './pages/login';
import Cadastro from './pages/cadastro'
import Reset from './pages/reset';
import Colletion from './pages/colletion';
import Pokemon from './pages/pokemon';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newsletter from './pages/newsletter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/reset",
    element: <Reset/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/colletion",
    element: <Colletion/>,
  },
  {
    path: "/news",
    element: <Newsletter/>,
  },
  {
    path: "/pokemon/:pokemon_name",
    element: <Pokemon/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


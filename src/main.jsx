import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home';
import Donate from './Donate/Donate';
import Detail from './Detail/Detail';
import Statistics from './Statistics/Statistics';
import Search from './Search/Search';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
       path:'/',
       element: <Home></Home>
      },
      {
        path:'/donation',
        loader: () =>fetch('/donationlist.json'),
        element: <Donate></Donate>
      },
      {
        path:'/detail/:id',
        loader: () =>fetch('/donationlist.json'),
        element: <Detail></Detail>
      },
      {
        path:'/statistics',
        loader: () =>fetch('/donationlist.json'),
        element: <Statistics></Statistics>
      },
      {
        path:'/search/:inputvalue',
        loader: () =>fetch('/donationlist.json'),
        element: <Search></Search>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

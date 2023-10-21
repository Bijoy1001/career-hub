import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJob from './components/AppliedJobs/AppliedJob';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetaile from './components/JobDetaile/JobDetaile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path:"/applied",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/job/:id',
        element: <JobDetaile></JobDetaile>,
        loader: () => fetch('/jobs.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

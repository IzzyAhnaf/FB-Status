import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import UploadPage from './Pages/Upload.jsx'

const router = createBrowserRouter([
  {
    path: '/Facebook-Status/', 
    element: <App />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: '/Facebook-Status/Upload',
        element: <UploadPage/>
      }
    ]
  },
  {
    path: '/Facebook-Status/Login',
    element: <Login/>,
  },
  {
    path: '/Facebook-Status/Register',
    element: <Register/>,
  },
  {
   
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

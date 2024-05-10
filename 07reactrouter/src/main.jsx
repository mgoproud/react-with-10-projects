import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, User, Github } from './components/index.js'
import { githubInfoLoader } from './components/github/Github.jsx'
// import About from './components/about/About.jsx'
// import User from './components/user/User.jsx'
// import Github from './components/github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route index path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
        path='github' 
        element={<Github />}
        loader={githubInfoLoader}  
      />
      <Route path='*' element={<div className='text-4xl bg-gray-800 text-white text-center py-4'>Request Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

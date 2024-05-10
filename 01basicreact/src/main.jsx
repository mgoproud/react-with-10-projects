import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyApp() {
  return (
    <h1>My Custom App</h1>
  )
}

// const AnotherElement = () => {
//   return (
//     <a href='https://google.com' target='_blank'>Visit Google</a>
//   )
// }

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)

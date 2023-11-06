//
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//En el div que tenga el ID "root" lo que haremos es renderizar todo lo que está comprendido entre los paréntesis despues del .render
ReactDOM.createRoot(document.getElementById('root')).render(
  //El modo estricto de react no afecta al renderizado de lo demás
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

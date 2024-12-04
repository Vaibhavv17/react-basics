import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// reconciliation hai jo differentiate karta hai browser wala dom and create Root wala dom

// diffing of lists is performed using keys



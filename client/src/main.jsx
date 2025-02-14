import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserDataProvider } from './context/FormDataContext.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UserDataProvider>
    <App />
  </UserDataProvider>
  </StrictMode>,
)

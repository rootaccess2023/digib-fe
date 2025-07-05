import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProviderContext } from './contexts/AuthProviderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProviderContext>
      <App />
    </AuthProviderContext>
  </StrictMode>,
)

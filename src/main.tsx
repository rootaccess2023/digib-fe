import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CSRFProvider } from './contexts/CSRFContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CSRFProvider>
      <App />
    </CSRFProvider>
  </StrictMode>,
)

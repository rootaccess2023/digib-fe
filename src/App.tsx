import './App.css'
import { BrowserRouter as Router } from 'react-router'
import Navbar from './components/Navbar'
import AppRoutes from './components/AppRoutes'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App

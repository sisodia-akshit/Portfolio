import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <Routes>
      <Route path={"/"} element={
        <Home />
      } />
    </Routes>
  )
}

export default App

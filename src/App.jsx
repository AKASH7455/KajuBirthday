import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import CountdownPage from './pages/CountdownPage'
import { isUnlocked, UNLOCK_DATE } from './utils/countdown'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'
import './styles/responsive.css'

function App() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    const checkUnlock = () => {
      const shouldUnlock = isUnlocked()

      if (shouldUnlock && !unlocked) {
        setUnlocked(true)
      }
    }

    checkUnlock() // Initial check
    const interval = setInterval(checkUnlock, 1000)

    return () => clearInterval(interval)
  }, [unlocked])

  return unlocked ? <HomePage /> : <CountdownPage />
}

export default App

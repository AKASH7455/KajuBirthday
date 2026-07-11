import { useEffect, useState } from 'react'
import './Sparkles.css'

export default function Sparkles() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 2 + 1
      }
      setSparkles(prev => [...prev.slice(-30), newSparkle])
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sparkles-container">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`
          }}
        />
      ))}
    </div>
  )
}

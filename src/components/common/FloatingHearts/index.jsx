import { useEffect, useState } from 'react'
import './FloatingHearts.css'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 20,
        duration: Math.random() * 3 + 4
      }
      setHearts(prev => [...prev.slice(-15), newHeart])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

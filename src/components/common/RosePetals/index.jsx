import { useEffect, useState } from 'react'
import './RosePetals.css'

/**
 * RosePetals Component - Placeholder for rose petal animation
 * This component creates falling rose petal effect
 */
export default function RosePetals() {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newPetal = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 15 + 10,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2
      }
      setPetals(prev => [...prev.slice(-20), newPetal])
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="petals-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}

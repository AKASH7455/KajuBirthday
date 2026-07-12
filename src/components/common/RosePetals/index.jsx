import { useEffect, useState } from "react";
import "./RosePetals.css";

export default function RosePetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    let id = 0;

    const interval = setInterval(() => {
      id++;

      const newPetal = {
        id,
        left: Math.random() * 96 + 2,          // 2% - 98%
        size: Math.random() * 10 + 18,         // 18px - 28px
        duration: Math.random() * 6 + 12,      // 12s - 18s
        delay: Math.random() * 1.5,
        opacity: Math.random() * 0.3 + 0.6,
        rotate: Math.random() * 360,
      };

      setPetals((prev) => [...prev.slice(-12), newPetal]);
    }, 1300); // Every 1.3 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
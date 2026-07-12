import { useEffect, useState } from "react";
import "./FloatingHearts.css";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let id = 0;

    const interval = setInterval(() => {
      id++;

      const newHeart = {
        id,
        left: Math.random() * 96 + 2, // 2% - 98%
        size: Math.random() * 12 + 22, // 22px - 34px
        duration: Math.random() * 6 + 14, // 14s - 20s
        opacity: Math.random() * 0.3 + 0.7,
      };

      setHearts((prev) => [...prev.slice(-10), newHeart]);
    }, 1400); // Every 1.4 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          🎀
        </span>
      ))}
    </div>
  );
}
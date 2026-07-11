import { useState, useEffect } from "react";
import { getTimeRemaining } from "../../utils/countdown";
import "./Countdown.css";

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTime(getTimeRemaining());
    };

    updateCountdown(); // Initial update

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    {
      value: time.days,
      label: "DAYS",
    },
    {
      value: time.hours,
      label: "HRS",
    },
    {
      value: time.minutes,
      label: "MIN",
    },
    {
      value: time.seconds,
      label: "SEC",
    },
  ];

  return (
    <section className="countdown">
      {countdownItems.map((item) => (
        <div className="time-box" key={item.label}>
          <span className="time-value">
            {String(item.value).padStart(2, "0")}
          </span>

          <p className="time-label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
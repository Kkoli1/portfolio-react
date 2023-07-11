import React, { useState, useEffect } from 'react';

function Timer({ duration, onTimerComplete }) {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
      onTimerComplete();
    }

    return () => clearInterval(timer);
  }, [remainingTime, onTimerComplete]);

  return (
    <div>
      <h2>Timer: {remainingTime}</h2>
    </div>
  );
}

export default Timer;
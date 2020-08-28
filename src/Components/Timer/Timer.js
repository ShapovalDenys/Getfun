import React, { useState, useEffect } from 'react';
import './Timer.scss';

const Timer = () => {

  const [timeHours, setTimeHours] = useState();
  const [timeMinutes, setTimeMinutes] = useState();

  useEffect(() => {
    let d = new Date();
    let hours = d.getHours();
    let minutes= d.getMinutes();
    setTimeHours(hours);
    setTimeMinutes(minutes)
  }, [])

  return (
  <div className="timer">
    <span>{timeHours < 10 ? `0${timeHours}` : timeHours}:{timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes}</span>
  </div>
  );
}

export default Timer;

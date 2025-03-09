import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // پاکسازی تایمر برای جلوگیری از نشت حافظه
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en', { hour12: false });
  };

  return (
    <div style={{ fontSize: '1.2rem', marginRight: '10px' }}>
      {formatTime(time)}
    </div>
  );
};

export default DigitalClock;

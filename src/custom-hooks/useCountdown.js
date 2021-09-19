import { useState, useEffect } from 'react';

export const useCountdown = (initial, wait = 1000) => {
  const [timer, setTimer] = useState(initial);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer === 0) setTimer(initial);
      else setTimer(timer - 1);
    }, wait);
    return () => clearTimeout(timeout);
  }, [timer]);

  return [timer];
};

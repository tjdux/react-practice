import { useEffect, useState } from "react";

export const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const interValid = setInterval(() => {
      setNow(getTime())
    }, refreshCycle)

    return () => clearInterval(interValid);
  }, [refreshCycle])

  return now;
}

export const getTime = () => {
  return new Date();
}
import { useState, useEffect } from 'react';

const useDataLoading = (data, initialDelay = 1000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // For local data, we add a small delay to ensure smooth transition
    if (data !== null && data !== undefined) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, initialDelay);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [data, initialDelay]);

  return isLoading;
};

export default useDataLoading;
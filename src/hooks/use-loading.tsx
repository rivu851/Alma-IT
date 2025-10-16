import { useState, useEffect } from "react";

// Custom hook for managing loading states with realistic timing
export const useLoading = (initialDelay = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  return isLoading;
};

// Hook for section-based loading (like LinkedIn)
export const useSectionLoading = () => {
  const [loadingStates, setLoadingStates] = useState({
    hero: true,
    alumni: true,
    events: true,
    jobs: true,
    news: true
  });

  useEffect(() => {
    // Stagger loading completion to simulate real data fetching
    const timers = [
      setTimeout(() => setLoadingStates(prev => ({ ...prev, hero: false })), 800),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, alumni: false })), 1200),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, events: false })), 1600),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, jobs: false })), 2000),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, news: false })), 2400),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return loadingStates;
};
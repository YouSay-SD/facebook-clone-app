import { useState, useRef, useEffect } from 'react';

const useNearScreen = ({ distance = '100px' } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = (entries: any, observer: any) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    const { current } = fromRef;

    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;

import { useEffect, useRef, useState } from 'react';

export const useTabOverflowX = () => {
  const [isOverflowX, setIsOverflowX] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const uListElement = ref.current;
    if (uListElement)
      setIsOverflowX(uListElement.scrollWidth > uListElement.clientWidth);
  }, []);

  return { isOverflowX, ref };
};

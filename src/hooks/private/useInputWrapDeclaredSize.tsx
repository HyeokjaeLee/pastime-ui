import { useEffect, useRef, useState } from 'react';

const SIZE_LIST = [32, 40, 48];

interface UseInputDeclaredSizeParams {
  style?: React.CSSProperties;
  className?: string;
}

export const useInputWrapDeclaredSize = ({
  style,
  className,
}: UseInputDeclaredSizeParams) => {
  const [isDeclaredSize, setIsDeclaredSize] = useState(true);
  const inputWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: inputWrap } = inputWrapRef;
    if (inputWrap) {
      const { height } = inputWrap.getBoundingClientRect();
      setIsDeclaredSize(SIZE_LIST.includes(height));
    }
  }, [className, style]);

  return {
    inputWrapRef,
    isDeclaredSize,
  };
};

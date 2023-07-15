import { useEffect, useState } from 'react';

export type OpenStatus = boolean | 'closing' | 'opening';

export const useSelectOpenStatus = (opened: boolean) => {
  const [openStatus, setOpenStatus] = useState<OpenStatus>(opened);

  useEffect(() => {
    setOpenStatus((prevOpenState) => {
      if (prevOpenState !== opened) return opened ? 'opening' : 'closing';
      return prevOpenState;
    });
  }, [opened, setOpenStatus]);

  useEffect(() => {
    if (typeof openStatus === 'string') {
      const nextOpenState = openStatus === 'opening';

      const timeout = setTimeout(() => setOpenStatus(nextOpenState), 200);
      return () => clearTimeout(timeout);
    }
  }, [openStatus]);

  return openStatus;
};

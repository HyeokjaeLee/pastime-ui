import { Spinner } from '@components/atoms';

export type ButtonIconDirection = 'left' | 'right';

interface UseButtonLoadingParams {
  loading: boolean;
  iconDirection: ButtonIconDirection;
  childrenType: 'icon' | 'text' | 'both';
}

export const useButtonLoading = ({
  loading,
  iconDirection,
  childrenType,
}: UseButtonLoadingParams) => {
  if (loading) {
    const LoadingSpinner = <Spinner size="small" sizeTransition />;
    if (childrenType === 'icon') {
      return {
        iconLoadingSpinner: LoadingSpinner,
      };
    }

    if (iconDirection === 'right') {
      return {
        leftLoadingSpinner: LoadingSpinner,
      };
    }

    return {
      rightLoadingSpinner: LoadingSpinner,
    };
  }
  return {};
};

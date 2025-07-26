import { useContext } from 'react';
import { AppContext } from './AppContext';

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('useAppContext must be used with a AppContext');
  }

  return appContext;
};

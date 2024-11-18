import { useContext } from 'react';
import { SecretPageContext } from './SecretPageContext';

export const useSecretPage = () => {
  const context = useContext(SecretPageContext);
  if (!context) {
    throw new Error('useSecretPage must be used within a SecretPageProvider');
  }
  return context;
};
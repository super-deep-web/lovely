import { createContext } from 'react';

export const SecretPageContext = createContext({
  isSecretUnlocked: false,
  setIsSecretUnlocked: () => {},
  clickPattern: [],
  setClickPattern: () => {},
  checkPattern: () => false
});
import { useState } from "react";
import PropTypes from "prop-types";
import { SecretPageContext } from "./SecretPageContext";

export const SecretPageProvider = ({ children }) => {
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);
  const [clickPattern, setClickPattern] = useState([]);

  const checkPattern = (pattern) => {
    if (pattern.length === 3) {
      const [first, second, third] = pattern;
      const timing1 = second - first;
      const timing2 = third - second;

      if (timing1 < 500 && timing2 > timing1 * 2) {
        setIsSecretUnlocked(true);
        return true;
      }
    }
    return false;
  };

  const value = {
    isSecretUnlocked,
    setIsSecretUnlocked,
    clickPattern,
    setClickPattern,
    checkPattern,
  };

  return (
    <SecretPageContext.Provider value={value}>
      {children}
    </SecretPageContext.Provider>
  );
};

SecretPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { ReactNode, useMemo, useState } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { storage } from '../model/Sotrage';

export const ThemeProvider = ({ children, ...props }: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
  changeCssRootVariables(theme);
  const changeTheme = (themeName: Theme) => {
    storage.setItem('theme', themeName);
    setTheme(themeName);
    changeCssRootVariables(themeName);
  };
  const value = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme],
  );
  console.log(theme, 'theme');
  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

type ThemeProviderPropsType = {
  children: ReactNode;
};

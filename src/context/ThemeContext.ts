import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = createContext<ThemeContextPropsType>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});

type ThemeContextPropsType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

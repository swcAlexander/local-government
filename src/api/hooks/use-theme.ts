import { useState, useLayoutEffect } from 'react';

type ThemeContextType = {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const useTheme = (): ThemeContextType | undefined => {
  if (typeof window !== 'undefined') {
    const isDarkTheme = window?.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const defaultTheme = isDarkTheme ? 'dark' : 'light';

    const [theme, setTheme] = useState<string>(
      localStorage.getItem('theme') || defaultTheme
    );

    useLayoutEffect(() => {
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }
    }, [theme]);

    return { theme, setTheme };
  }
  return undefined;
};
export default useTheme;

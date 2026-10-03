import { createContext, useEffect, useMemo, useState } from 'react';
import { defaultPalette, palettes } from './palettes';

export const ThemeContext = createContext(null);
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences remain session-only when storage is unavailable. */ } };

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readPreference('pomodot-theme') === 'dark' ? 'dark' : 'light');
  const [palette, setPalette] = useState(() => { const preference = readPreference('pomodot-palette'); return palettes[preference] ? preference : defaultPalette; });
  useEffect(() => { document.documentElement.dataset.theme = theme; savePreference('pomodot-theme', theme); }, [theme]);
  useEffect(() => {
    const colors = palettes[palette];
    document.documentElement.style.setProperty('--coral', colors.primary);
    document.documentElement.style.setProperty('--coral-dark', colors.primaryHover);
    document.documentElement.style.setProperty('--primary-soft', colors.primarySoft);
    document.documentElement.style.setProperty('--sage', colors.support);
    document.documentElement.style.setProperty('--sage-soft', colors.supportSoft);
    savePreference('pomodot-palette', palette);
  }, [palette]);
  const value = useMemo(() => ({ theme, setTheme, palette, setPalette, palettes }), [theme, palette]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

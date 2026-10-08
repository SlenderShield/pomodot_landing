import { useContext, useState } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import { Brand, PrimaryCta } from './ui';
import { links, nav } from '../content/site';

export function Header() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme, palette, setPalette, palettes } = useContext(ThemeContext);
  return (
    <header className="site-header">
      <div className="container nav">
        <Brand />
        <nav id="main-navigation" className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <div className="appearance-controls">
            <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {theme === 'light' ? <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>}
              </svg>
            </button>
            <label className="palette-select"><span className="sr-only">Brand color</span>
              <select value={palette} onChange={event => setPalette(event.target.value)} aria-label="Brand color">
                {Object.entries(palettes).map(([id, item]) => <option key={id} value={id}>{item.label}</option>)}
              </select>
            </label>
          </div>
          {links.appUrl && <a className="sign-in" href={links.appUrl}>Sign in</a>}
          <PrimaryCta short />
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}><span /><span /></button>
        </div>
      </div>
    </header>
  );
}

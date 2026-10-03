import { useContext, useState } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import { Brand, Button } from './ui';

const links = [['Product', '#product'], ['How it works', '#workflow'], ['Views', '#views'], ['Details', '#details']];
export function Header() {
  const [menu, setMenu] = useState(false); const { theme, setTheme, palette, setPalette, palettes } = useContext(ThemeContext);
  return <header className="site-header"><div className="container nav"><Brand /><nav id="main-navigation" className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav><div className="nav-actions"><div className="appearance-controls"><button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '◐' : '☼'}</button><label className="palette-select"><span className="sr-only">Brand color</span><select value={palette} onChange={event => setPalette(event.target.value)} aria-label="Brand color">{Object.entries(palettes).map(([id, item]) => <option key={id} value={id}>{item.label}</option>)}</select></label></div><a className="sign-in" href="#timer">Sign in</a><Button href="#timer">Start free <span aria-hidden="true">→</span></Button><button className="menu-button" aria-label="Toggle navigation" aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}><span /><span /></button></div></div></header>;
}

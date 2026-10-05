import { useCallback, useEffect, useState } from 'react';

export const timerModes = {
  focus: { label: 'Focus', duration: 1500, detail: 'Deep focus sprint', action: 'Start focus' },
  short: { label: 'Short break', duration: 300, detail: 'Rest & reset', action: 'Start break' },
  long: { label: 'Long break', duration: 900, detail: 'Extended reset', action: 'Start break' },
};

export const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

export function usePomodoro() {
  const [mode, setActiveMode] = useState('focus'); const [remaining, setRemaining] = useState(timerModes.focus.duration); const [running, setRunning] = useState(false);
  const settings = timerModes[mode];
  const selectMode = useCallback(nextMode => { setRunning(false); setActiveMode(nextMode); setRemaining(timerModes[nextMode].duration); }, []);
  const reset = useCallback(() => { setRunning(false); setRemaining(settings.duration); }, [settings.duration]);
  useEffect(() => { if (!running) return undefined; const interval = window.setInterval(() => setRemaining(value => value > 0 ? value - 1 : 0), 1000); return () => window.clearInterval(interval); }, [running]);
  useEffect(() => { if (remaining === 0 && running) selectMode(mode === 'focus' ? 'short' : 'focus'); }, [remaining, running, mode, selectMode]);
  useEffect(() => { const shortcut = event => { if (event.code === 'Space' && !['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(document.activeElement?.tagName)) { event.preventDefault(); setRunning(value => !value); } }; window.addEventListener('keydown', shortcut); return () => window.removeEventListener('keydown', shortcut); }, []);
  useEffect(() => { const base = document.title.replace(/^\d\d:\d\d · /, ''); document.title = running ? `${formatTime(remaining)} · ${base}` : base; return () => { document.title = base; }; }, [running, remaining]);
  return { mode, remaining, running, settings, selectMode, reset, setRunning };
}

'use client'; // for Next.js 13+ app directory, or if you're using App Router

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, read localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setIsDark(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-center font-custom text-2xl inline-block tracking-normal px-4 py-2 bg-gray-200 transition-colors duration-500 ease-in-out dark:bg-gray-700 dark:text-white rounded"
    >
 {isDark ? <Sun/> : <Moon/>}
    </button>
  );
}

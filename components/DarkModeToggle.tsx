
'use client'

import React from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes'

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='relative bg-gray-100 dark:bg-zinc-900 h-[2.4rem] w-[2.4rem] rounded-full m-4 cursor-pointer'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <IconMoon className='rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
      <IconSun className='rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
    </button>
  )
}

export default DarkModeToggle

'use client'

import React from 'react'
import { ThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { createContext, useContext } from "react"

type Theme = "light" | "dark" | "system"
interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  mounted: false,
})


export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute={'class'} defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()

  const contextValue = {
    theme: theme as Theme || systemTheme as Theme || 'light',
    setTheme: setTheme,
    mounted: true
  };

  return contextValue;
}
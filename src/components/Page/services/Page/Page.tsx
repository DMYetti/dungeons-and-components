import React, { createContext, useContext, useMemo } from "react"

export type Mode = "default" | "minimal"

const Context = createContext<{
  mode: Mode
}>({
  mode: "default",
})

export interface PageProviderProps {
  mode: Mode
  children: React.ReactNode
}

export function PageProvider({
  mode,
  children,
}: PageProviderProps): JSX.Element {
  const value = useMemo(() => ({ mode }), [mode])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function usePageMode(): Mode {
  const { mode } = useContext(Context)

  return mode
}

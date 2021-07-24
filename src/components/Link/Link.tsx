import React, { createContext, useContext, useRef, useState } from "react"

import { Container } from "./Link.styled"

type LinkTarget = React.RefObject<HTMLHeadingElement>

const Context = createContext<{
  links: React.MutableRefObject<Record<string, LinkTarget>>
  register: (ref: LinkTarget, name: string) => void
}>({
  links: { current: {} },
  register: () => undefined,
})

export interface LinkProps extends React.ComponentProps<typeof Container> {
  name: string
  children: React.ReactNode
}

export default function Link({
  name,
  children,
  ...props
}: LinkProps): JSX.Element {
  const { links } = useContext(Context)
  const link = links.current[name]

  function handleClick() {
    link?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Container {...props} onClick={handleClick} link={!!link}>
      {children}
    </Container>
  )
}

export interface LinkProviderProps {
  children: React.ReactNode
}

export function LinkProvider({ children }: LinkProviderProps): JSX.Element {
  const links = useRef<Record<string, LinkTarget>>({})

  const changed = useRef<Record<string, boolean>>({})

  function register(ref: LinkTarget, name: string) {
    if (links.current[name] !== ref) {
      if (changed.current[name]) {
        console.warn(`Duplicate Link definition: ${name}`)
      }

      links.current[name] = ref
      changed.current[name] = true
    }
  }

  return (
    <Context.Provider value={{ links, register }}>{children}</Context.Provider>
  )
}

export function useLink(name: string): LinkTarget {
  const { register } = useContext(Context)
  const ref = useRef<HTMLHeadingElement>(null)

  register(ref, name)

  return ref
}

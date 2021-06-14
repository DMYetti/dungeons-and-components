import React, { createContext, useContext, useRef, useState } from "react"

import { Container } from "./Link.styled"

type LinkTarget = React.RefObject<HTMLHeadingElement>

const Context = createContext<{
  links: Record<string, LinkTarget>
  register: (name: string, ref: LinkTarget) => void
}>({
  links: {},
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
  const link = links[name]

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
  const [, forceUpdate] = useState({})
  const links = useRef<Record<string, LinkTarget>>({})
  const timer = useRef<NodeJS.Timeout>()

  const changed = useRef<Record<string, boolean>>({})
  const warned = useRef<Record<string, boolean>>({})

  function register(name: string, ref: LinkTarget) {
    if (links.current[name] !== ref) {
      if (changed.current[name] && !warned.current[name]) {
        console.warn(`Duplicate Link definition: ${name}`)
        warned.current[name] = true
      }

      links.current[name] = ref
      changed.current[name] = true

      timer.current && clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        changed.current = {}
        forceUpdate({})
      }, 0)
    }
  }

  return (
    <Context.Provider value={{ links: links.current, register }}>
      {children}
    </Context.Provider>
  )
}

export function useLink(name: string): LinkTarget {
  const { register } = useContext(Context)
  const ref = useRef<HTMLHeadingElement>(null)

  if (typeof register === "function") {
    if (typeof name === "string") {
      register(name, ref)
    }
  }

  return ref
}

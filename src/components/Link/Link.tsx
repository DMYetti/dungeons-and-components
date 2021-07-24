import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { Container } from "./Link.styled"

export type LinkTarget = React.RefObject<HTMLHeadingElement>

const Context = createContext<{
  links: Record<string, LinkTarget>
  register: (ref: LinkTarget, name: string) => void
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
  const links = useLinks()
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

  const changed = useRef<Record<string, boolean>>({})
  const warned = useRef<Record<string, boolean>>({})

  const register = useCallback((ref: LinkTarget, name: string) => {
    if (links.current[name] !== ref) {
      if (changed.current[name] && !warned.current[name]) {
        console.warn(`Duplicate Link definition: ${name}`)
        warned.current[name] = true
      }

      links.current[name] = ref
      changed.current[name] = true

      forceUpdate({})

      return () => {
        delete changed.current[name]
        delete links.current[name]
        delete warned.current[name]
      }
    }
  }, [])

  return (
    <Context.Provider value={{ links: links.current, register }}>
      {children}
    </Context.Provider>
  )
}

export function useLinks(): Record<string, LinkTarget> {
  const { links } = useContext(Context)

  return links
}

export function useLink(name: string): LinkTarget {
  const { register } = useContext(Context)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => register(ref, name), [register, name])

  return ref
}

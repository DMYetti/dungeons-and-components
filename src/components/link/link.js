import React, { createContext, useContext, useRef, useState } from 'react'

import { Container } from './link.styled'

const Context = createContext({})

export default function Link({ name, children, ...props }) {
  const { links } = useContext(Context)
  const link = links[name]

  function handleClick() {
    link?.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Container {...props} onClick={handleClick} link={link}>
      {children}
    </Container>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export function LinkProvider({ children }) {
  const [, forceUpdate] = useState({})
  const links = useRef({})
  const timer = useRef()

  const changed = useRef({})
  const warned = useRef({})
  function register(name, ref) {
    if (links.current[name] !== ref) {
      if (changed.current[name] && !warned.current[name]) {
        console.warn(`Duplicate Link definition: ${name}`) // eslint-disable-line no-console
        warned.current[name] = true
      }

      links.current[name] = ref
      changed.current[name] = true

      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        changed.current = {}
        forceUpdate()
      }, 0)
    }
  }

  return (
    <Context.Provider value={{ links: links.current, register }}>
      {children}
    </Context.Provider>
  )
}

LinkProvider.propTypes = {
  children: PropTypes.node,
}

export function useLink(name) {
  const { register } = useContext(Context)
  const ref = useRef()

  if (typeof register === 'function') {
    if (typeof name === 'string') {
      register(name, ref)
    }
  }

  return ref
}

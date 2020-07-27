import styled from '@emotion/styled'

export const Container = styled.div`
  cursor: ${({ link }) => (link ? 'pointer' : 'default')};
`

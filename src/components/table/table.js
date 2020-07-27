import PropTypes from 'prop-types'
import React from 'react'
import { get } from 'lodash'

import {
  Container,
  Title,
  Table as BaseTable,
  Header,
  Body,
  Footer,
  Heading,
  Footing,
  Row,
  Cell,
} from './table.styled'

export default function Table({ title, columns, data, footer, ...props }) {
  return (
    <Container {...props}>
      {title && (
        <Title>{title}</Title>
      )}

      <BaseTable {...props}>
        <Header>
          <Row>
            {columns.map(({ key, label, transform, ...props }, colIndex) => (
              <Heading key={label || colIndex} {...props}>{label}</Heading>
            ))}
          </Row>
        </Header>

        <Body>
          {data.map((data, rowIndex) => (
            <Row key={data.key || rowIndex}>
              {columns.map(({ key, label, transform, ...props }, colIndex) => {
                const value = get(data, key)

                return (
                  <Cell key={label || colIndex} {...props}>{transform ? transform(value, rowIndex) : value}</Cell>
                )
              })}
            </Row>
          ))}
        </Body>

        {footer && (
          <Footer>
            {footer.map((data, rowIndex) => (
              <Row key={data.key || rowIndex}>
                {columns.map(({ key, label, transform, ...props }, colIndex) => {
                  const value = get(data, key)

                  return (
                    <Footing key={label || colIndex} {...props}>{transform ? transform(value, rowIndex) : value}</Footing>
                  )
                })}
              </Row>
            ))}
          </Footer>
        )}
      </BaseTable>
    </Container>
  )
}

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.node,
    label: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.node,
  })).isRequired,
  footer: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.node.isRequired,
  })),
}

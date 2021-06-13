import React from "react"
import { get } from "lodash"

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
} from "./Table.styled"

export interface Column extends React.ComponentProps<typeof Cell> {
  key: string
  label?: string
  transform?: (value: any, index: number) => any
  // Heading/Cell/Footing props
}

export interface Data {
  key?: string
  [key: string]: any
  // data/footer values
}

export default function Table({
  title,
  columns,
  data,
  footer,
  ...props
}: {
  title?: string
  columns: Column[]
  data: Data[]
  footer?: Data[]
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}

      <BaseTable>
        <Header>
          <Row>
            {columns.map(({ key, label, transform, ...props }, colIndex) => (
              <Heading key={label || colIndex} {...props}>
                {label}
              </Heading>
            ))}
          </Row>
        </Header>

        <Body>
          {data.map((data, rowIndex) => (
            <Row key={data.key || rowIndex}>
              {columns.map(({ key, label, transform, ...props }, colIndex) => {
                const value = get(data, key)

                return (
                  <Cell key={label || colIndex} {...props}>
                    {transform ? transform(value, rowIndex) : value}
                  </Cell>
                )
              })}
            </Row>
          ))}
        </Body>

        {footer && (
          <Footer>
            {footer.map((data, rowIndex) => (
              <Row key={data.key || rowIndex}>
                {columns.map(
                  ({ key, label, transform, ...props }, colIndex) => {
                    const value = get(data, key)

                    return (
                      <Footing key={label || colIndex} {...props}>
                        {transform ? transform(value, rowIndex) : value}
                      </Footing>
                    )
                  },
                )}
              </Row>
            ))}
          </Footer>
        )}
      </BaseTable>
    </Container>
  )
}

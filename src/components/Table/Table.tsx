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

export interface Column<T> extends React.ComponentProps<typeof Cell> {
  key: string
  label?: string
  transform?: (value: any, data: T, index: number) => any
}

export interface TableProps<T> extends React.ComponentProps<typeof Container> {
  title?: string
  columns: Column<T>[]
  data: Array<T>
  footer?: Array<T>
}

export default function Table<T>({
  title,
  columns,
  data,
  footer,
  ...props
}: TableProps<T>): JSX.Element {
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
            <Row key={((data as unknown) as { key: string }).key || rowIndex}>
              {columns.map(({ key, label, transform, ...props }, colIndex) => {
                const value = key === "@index" ? rowIndex : get(data, key)

                return (
                  <Cell key={label || colIndex} {...props}>
                    {transform ? transform(value, data, rowIndex) : value}
                  </Cell>
                )
              })}
            </Row>
          ))}
        </Body>

        {footer && (
          <Footer>
            {footer.map((data, rowIndex) => (
              <Row key={((data as unknown) as { key: string }).key || rowIndex}>
                {columns.map(
                  ({ key, label, transform, ...props }, colIndex) => {
                    const value = get(data, key)

                    return (
                      <Footing key={label || colIndex} {...props}>
                        {transform ? transform(value, data, rowIndex) : value}
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

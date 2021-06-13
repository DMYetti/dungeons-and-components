import React from "react"

import Link from "../Link/Link"

import {
  Container,
  List,
  ListItem,
  Label,
  PageNumber,
} from "./TableOfContents.styled"

interface Item {
  label: string
  name: string
}

type Items = Array<Item | Items>

type ItemsInput = Array<string | Item | ItemsInput>

export default function TableOfContents({
  items,
  ...props
}: {
  items: ItemsInput
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      <Rows level={0} items={items} />
    </Container>
  )
}

function Rows({
  level,
  items: items_,
}: {
  level: number
  items: ItemsInput
}): JSX.Element {
  const items = normalize(items_)

  return (
    <List>
      {items.map((item, index) =>
        Array.isArray(item) ? (
          <ListItem key={index}>
            <Rows level={level + 1} items={item} />
          </ListItem>
        ) : (
          <ListItem key={index}>
            <PageNumber level={level}>0</PageNumber>
            <Label as={Link} level={level} title={item.name}>
              {item.label}
            </Label>
          </ListItem>
        ),
      )}
    </List>
  )
}

function normalize(list: ItemsInput): Items {
  return list.map((item) => {
    if (Array.isArray(item)) {
      return normalize(item)
    }

    if (typeof item === "string") {
      return { label: item, name: item }
    }

    return item
  })
}

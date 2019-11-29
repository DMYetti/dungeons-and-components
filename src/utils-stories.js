import React from 'react';

import Container, { Page } from './dnc';

export function withContainer(Child) {
  return (
    <Container>
      <Child />
    </Container>
  );
}

export function withHalfPage(Child) {
  return (
    <Container>
      <Page story="half">
        <Child />
      </Page>
    </Container>
  );
}

export function withFullPage(Child) {
  return (
    <Container>
      <Page story="full">
        <Child />
      </Page>
    </Container>
  );
}
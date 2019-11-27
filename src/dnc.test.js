import React from 'react';
import { expect } from 'chai';
import { render } from '~/utils-test';

import DNC, * as extras from './dnc';

describe('Main Entry Point', () => {
  it('provides a component', () => {
    const { container } = render((
      <DNC>Hello World!</DNC>
    ));

    expect(container).to.contain.text('Hello World!');
  });

  it('provides extra components', () => {
    expect(extras).to.have.property('ClassTable');
    expect(extras).to.have.property('Description');
    expect(extras).to.have.property('Note');
    expect(extras).to.have.property('Page');
    expect(extras).to.have.property('Spell');
    expect(extras).to.have.property('SpellList');
    expect(extras).to.have.property('Table');
    expect(extras).to.have.property('TableOfContents');
  });
});

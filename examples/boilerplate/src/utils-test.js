/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  render as baseRender,
  cleanup,
} from '@testing-library/react';

import chai from 'chai';
import chaiDom from 'chai-dom';

chai.use(chaiDom);
afterEach(cleanup);

const render = (children) => baseRender((
  <div>
    {children}
  </div>
));

export * from '@testing-library/react';

export {
  render,
};

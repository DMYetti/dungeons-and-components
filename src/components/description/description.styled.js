import styled from '@emotion/styled';
import { withBreakable } from '../../utils/styled';

import border from './assets/border.png';

export const Container = styled.div`
  ${withBreakable}

  font-family: ScalySans;
  margin: 0.125in 0;
  padding: 0 4px;
  background-color: #faf7ea;
  border-style: solid;
  border-width: 7px;
  border-image: url(${border}) 12 stretch;
  border-image-outset: 4px;
  box-shadow: 0 0.0625in 0.125in #888;
  box-shadow: 0 0 0.0625in #faf7ea;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`;

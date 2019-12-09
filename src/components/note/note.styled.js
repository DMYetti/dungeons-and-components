import styled from '@emotion/styled';
import { withBreakable } from '../../utils/styled';

import border from './assets/border.png';

export const Container = styled.div`
  ${withBreakable}

  font-family: ScalySans;
  margin: 0.25in 0;
  border-style: solid;
  border-width: 0.125in;
  border-image: url(${border}) 12 fill stretch;
  border-image-outset: 0.125in 0;
  box-shadow: 0 0.0625in 0.125in #888;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 0.125in;
  font-family: ScalySansSmallCaps;
  font-size: 0.423cm;
  font-weight: 900;
`;

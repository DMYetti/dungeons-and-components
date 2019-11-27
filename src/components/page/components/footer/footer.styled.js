import styled from '@emotion/styled';

import background from './assets/background.png';

import { Container as Page } from '../../page.styled';

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5in;
  background-image: url(${background});
  background-size: cover;

  ${Page}:nth-child(even) > & {
    transform: scaleX(-1);
  }
`;

export const Footnote = styled.div`
  position: absolute;
  bottom: 0.3in;
  width: 2in;
  font-size: 0.1in;
  color: #c9ad6a;

  right: 0.8in;
  text-align: right;
  ${Page}:nth-child(even) & {
    transform: scaleX(-1);
    text-align: left;
  }
`;

export const PageNumber = styled.div`
  position: absolute;
  bottom: 0.2in;
  width: 0.55in;
  font-size: 0.125in;
  text-align: center;
  color: #c9ad6a;

  &:empty:after {
    content: counter(dnc-page-numbers);
  }

  right: 0;
  ${Page}:nth-child(even) & {
    transform: scaleX(-1);
  }
`;

import styled from '@emotion/styled';

import background from './assets/background.png';

import { Container as Page } from '../../page.styled';

export const Container = styled.div`
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  height: 50px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;

  ${Page}:nth-child(even) > & {
    transform: scaleX(-1);
  }
`;

export const Footnote = styled.div`
  position: absolute;
  bottom: 32px;
  z-index: 150;
  width: 200px;
  font-size: 0.8em;
  color: #c9ad6a;

  right: 80px;
  text-align: right;
  ${Page}:nth-child(even) & {
    transform: scaleX(-1);
    text-align: left;
  }
`;

export const PageNumber = styled.div`
  position: absolute;
  bottom: 22px;
  width: 50px;
  font-size: 0.9em;
  color: #c9ad6a;
  text-align: center;

  &:empty:after {
    content: counter(phb-page-numbers);
  }

  right: 2px;
  ${Page}:nth-child(even) & {
    transform: scaleX(-1);
  }
`;

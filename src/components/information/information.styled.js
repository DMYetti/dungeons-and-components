import styled from '@emotion/styled';

import border from './assets/border.png';

export const Container = styled.div`
  display: block-inline;
  margin-bottom: 1em;
  background-color: #faf7ea;
  font-family: ScalySans;
  border-style: solid;
  border-width: 7px;
  border-image: url(${border}) 12 stretch;
  border-image-outset: 4px;
  box-shadow: 0px 0px 6px #faf7ea;

  column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  p {
    line-height: 1.5em;
  }

  em {
    font-family: ScalySans;
    font-style: italic;
  }

  strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
`;

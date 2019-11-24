import styled from '@emotion/styled';
import { css } from '@emotion/core';

import border from './assets/border.png';

export const Container = styled.div`
  column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  ${({ wide }) => wide && css`
    column-span: all;
  `}

  ${({ bordered }) => bordered && css`
    margin-top: 25px;
    margin-bottom: 40px;
    border-collapse: separate;
    background-color: white;
    border: initial;
    border-style: solid;
    border-image-outset: 25px 17px;
    border-image-repeat: stretch;
    border-image-slice: 150 200 150 200;
    border-image-source: url(${border});
    border-image-width: 47px;
  `}
`;

export const Title = styled.h5`
`;

export const Table = styled.table`
  font-family: ScalySans;
  width: 100%;
  margin-bottom: 1em;
  font-size: 10pt;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Header = styled.thead`
  display: table-row-group;
  font-weight: 800;
`;

export const Body = styled.tbody`
`;

export const Footer = styled.tfoot`
`;

export const Row = styled.tr`
  ${Body} &:nth-child(odd) {
    background-color: #e0e5c1;
  }
`;

export const Cell = styled.td`
  padding: 0.3em 0.1em;
  text-align: ${({ align }) => align};
  vertical-align: top;

  ${({ narrow }) => narrow && css`
    width: 1px;
    white-space: nowrap;
  `}
`;

Cell.defaultProps = {
  align: 'left',
};

export const Heading = styled(Cell.withComponent('th'))`
  vertical-align: bottom;
  padding-bottom: 0.3em;
  padding-right: 0.1em;
  padding-left: 0.1em;
`;

Heading.defaultProps = Cell.defaultProps;

export const Footing = styled(Cell.withComponent('th'))`
  vertical-align: bottom;
  padding-bottom: 0.3em;
  padding-right: 0.1em;
  padding-left: 0.1em;
`;

Footing.defaultProps = Cell.defaultProps;

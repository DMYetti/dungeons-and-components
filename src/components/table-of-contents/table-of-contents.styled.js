import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled.div`
  column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0 !important;

  ul {
    margin-left: 10px !important;
  }
`;

export const ListItem = styled.li`
`;

export const Label = styled.div`
  ${({ level }) => level === 0 && css`
    font-size: 0.529cm;
    border-bottom: 2px solid #c9ad6a;
    margin-bottom: 4px !important;
    margin-top: 10px !important;
  `}

  ${({ level }) => level === 1 && css`
    font-size: 0.458cm;
  `}

  ${({ level }) => level > 0 && css`
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    display: block;

    &:after {
      font-family: BookSanity;
      font-size: 0.317cm;
      font-weight: normal;
      color: black;
      content:
        " ........................................"
        "........................................."
        ".........................................";
    }
  `}
`;

export const PageNumber = styled.div`
  float: right;
  font-family: BookSanity;
  font-size: 0.317cm;
  font-weight: normal;
  color: black;
  margin-left: 1px;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
`;

export const Title = styled.h3`
  font-size: 0.2in;
  line-height: 1;

  margin: 0.125in 0 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180D;
`;

export const Details = styled.div`
  font-style: italic;
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0.5em 0;
  padding: 0;
`;

export const Info = styled.li`
`;

export const Label = styled.span`
  font-weight: bold;

  :after {
    content: ": ";
  }
`;

export const Value = styled.span`
`;

export const Description = styled.div`
  text-indent: 1em;
`;

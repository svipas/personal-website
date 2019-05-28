import styled, { css } from 'styled-components';

const styles = css`
  font-weight: 500;
  color: #eceff4;
  margin: ${props => props.margin || '10px 0'};
`;

export const H1 = styled.h1`
  font-size: 24px;
  ${styles}
`;

export const H2 = styled.h2`
  font-size: 20px;
  ${styles}
`;

export const H3 = styled.h3`
  font-size: 18px;
  ${styles}
`;

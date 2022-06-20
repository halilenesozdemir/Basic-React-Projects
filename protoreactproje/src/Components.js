import styled, { css } from 'styled-components';

export const Title = styled.h3`
  &:hover {
    background-color: lightblue;
  }
  font-size: 3rem;
  font-weight: 600;
  text-decoration: underline;
  ${props =>
    props.theme === 'dark' &&
    css`
      background: #000;
      color: #fff;
    `}
`;

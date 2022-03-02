import React, { ReactElement } from 'react';
import styled from 'styled-components';

// Styled Components
const TechnicanWrapper = styled.span`
  margin-bottom: 0.5rem;
  display: inline-block;
  padding: 1rem;
  background: ${({ theme }) => theme.gray};

  :last-of-type {
    margin-bottom: 0;
  }
`;

// Props
interface Props {
  person: string;
}

const Technican = ({ person }: Props): ReactElement => (
  <TechnicanWrapper>{person}</TechnicanWrapper>
);

export default Technican;

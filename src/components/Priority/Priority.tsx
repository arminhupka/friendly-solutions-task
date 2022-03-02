import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import PriorityEnum from '../../enums/PriorityEnum';

// Styled Components
const PriorityBlob = styled.span<{ status: any }>`
  display: inline-block;
  padding: 1rem;

  ${({ status }) => {
    if (status === PriorityEnum.Low) {
      return (
        status &&
        css`
          color: #fff;
          background: ${({ theme }) => theme.primary};
          border: 0.1rem solid ${({ theme }) => theme.primaryDark};
          border-radius: 0.3rem;
        `
      );
    }

    if (status === PriorityEnum.Normal) {
      return (
        status &&
        css`
          color: #fff;
          background: ${({ theme }) => theme.orange};
          border: 0.1rem solid ${({ theme }) => theme.orange};
          border-radius: 0.3rem;
        `
      );
    }

    if (status === PriorityEnum.High) {
      return (
        status &&
        css`
          color: #fff;
          background: ${({ theme }) => theme.red};
          border: 0.1rem solid ${({ theme }) => theme.redDark};
          border-radius: 0.3rem;
        `
      );
    }

    return null;
  }}
`;

// Props
interface Props {
  status: string;
}

const Priority = ({ status }: Props): ReactElement => {
  return <PriorityBlob status={status}>{status}</PriorityBlob>;
};

export default Priority;

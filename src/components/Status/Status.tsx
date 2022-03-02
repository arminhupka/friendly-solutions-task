import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import StatusEnum from '../../enums/StatusEnum';

// Styled Components
const StatusBlob = styled.span<{ status: any }>`
  display: inline-block;
  padding: 1rem;

  ${({ status }) => {
    if (status === StatusEnum.New) {
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

    if (status === StatusEnum.Canceled) {
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

    if (status === StatusEnum.Completed) {
      return (
        status &&
        css`
          color: #fff;
          background: ${({ theme }) => theme.green};
          border: 0.1rem solid ${({ theme }) => theme.greenDark};
          border-radius: 0.3rem;
        `
      );
    }

    if (status === StatusEnum.Confirmed) {
      return (
        status &&
        css`
          color: #fff;
          background: ${({ theme }) => theme.orange};
          border: 0.1rem solid ${({ theme }) => theme.orangeDark};
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

const Status = ({ status }: Props): ReactElement => {
  return <StatusBlob status={status}>{status}</StatusBlob>;
};

export default Status;

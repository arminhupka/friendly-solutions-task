import React, { ChangeEvent, ReactElement, useMemo, useState } from 'react';
import styled from 'styled-components';

import { ApiResponse } from '../../interface/response';
import Priority from '../Priority/Priority';
import Status from '../Status/Status';
import Technican from '../Technican/Technican';

// Styled Components
const TableWrapper = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SearchInput = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 0.2rem;
  border-collapse: collapse;
  overflow: hidden;
`;

const TableHead = styled.thead`
  color: #fff;
  background: #009485;
`;

const TableHeadRow = styled.tr`
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
`;

const TableHeading = styled.th`
  flex: 1;
  padding: 1rem;
  text-align: center;
`;

const TableRow = styled.tr`
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  border-top: 1px solid #ccc;

  :nth-child(even) {
    background: #f5f5f5;
  }

  :first-of-type {
    border-top: none;
  }

  :hover {
    background: ${({ theme }) => theme.grayDark};
  }
`;

const TableData = styled.td`
  flex: 1;
`;

// Interface
interface Props {
  data: ApiResponse;
}

const Table = ({ data }: Props): ReactElement => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const tasks = useMemo(() => {
    if (!keyword) {
      return data.response.data;
    }

    return data.response.data.filter((task) =>
      task.description.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [data, keyword]);

  return (
    <TableWrapper>
      <SearchInput
        type="text"
        placeholder="Find task"
        onChange={handleSearchInput}
      />
      <StyledTable>
        <TableHead>
          <TableHeadRow>
            <TableHeading>WO ID</TableHeading>
            <TableHeading>Description</TableHeading>
            <TableHeading>Received Date</TableHeading>
            <TableHeading>Assigned to</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading>Priority</TableHeading>
          </TableHeadRow>
        </TableHead>
        <tbody>
          {tasks.length === 0 && (
            <TableRow>
              <TableData>Nothing to show</TableData>
            </TableRow>
          )}
          {tasks.map((task) => (
            <TableRow key={task.work_order_id}>
              <TableData data-label="W0 ID">{task.work_order_id}</TableData>
              <TableData data-label="Description">{task.description}</TableData>
              <TableData data-label="Received Date">
                {task.received_date}
              </TableData>
              <TableData data-label="Assigned to">
                {task.assigned_to.map((person) => (
                  <Technican person={person.person_name} />
                ))}
              </TableData>
              <TableData data-label="Status">
                <Status status={task.status} />
              </TableData>
              <TableData data-label="Priority">
                <Priority status={task.priority} />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;

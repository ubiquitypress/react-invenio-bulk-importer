import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow
} from 'semantic-ui-react';

export interface ResultTableProps {
  children: React.ReactNode;
}

export const ResultTable: React.FC<ResultTableProps> = ({ children }) => {
  return (
    <Table padded size='small' compact>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell />
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

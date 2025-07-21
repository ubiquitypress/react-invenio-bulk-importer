import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow
} from 'semantic-ui-react';

export const ResultTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <Table padded size='small' comp>
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

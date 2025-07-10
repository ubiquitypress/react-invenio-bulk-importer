import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow
} from 'semantic-ui-react';

export const ResultsTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <Table celled size='small' comp>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Records</TableHeaderCell>
          <TableHeaderCell>Files</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Mode</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

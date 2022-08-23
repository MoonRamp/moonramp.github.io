import {Component, mapArray} from 'solid-js';

import Paper from '@suid/material/Paper';
import Table from '@suid/material/Table';
import TableBody from '@suid/material/TableBody';
import TableCell from '@suid/material/TableCell';
import TableContainer from '@suid/material/TableContainer';
import TableHead from '@suid/material/TableHead';
import TableRow from '@suid/material/TableRow';

import CheckIcon from '@suid/icons-material/Check';
import ReportProblemIcon from '@suid/icons-material/ReportProblem';

const createRow = (
  name: string,
  openSource: object,
  nonCustodial: object,
  programmable: object,
  feePercentage: number
) => {
  return {name, openSource, nonCustodial, programmable, feePercentage};
};

const rows = [
  createRow('MoonRamp', CheckIcon, CheckIcon, CheckIcon, '0%'),
  createRow('BtcPay', CheckIcon, CheckIcon, ReportProblemIcon, '0%'),
  createRow('Bitpay', ReportProblemIcon, ReportProblemIcon, ReportProblemIcon, '1%'),
  createRow('Coingate', ReportProblemIcon, ReportProblemIcon, ReportProblemIcon, '+1%'),
  createRow('Coinbase', ReportProblemIcon, ReportProblemIcon, ReportProblemIcon, '1%'),
];

const ComparisonTable: Component = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 600}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Gateway</TableCell>
            <TableCell align="right">Open&nbsp;Source</TableCell>
            <TableCell align="right">Non-Custodial</TableCell>
            <TableCell align="right">Programmable</TableCell>
            <TableCell align="right">Fees</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mapArray(
            () => rows,
            (row) => (
              <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.openSource}</TableCell>
                <TableCell align="right">{row.nonCustodial}</TableCell>
                <TableCell align="right">{row.programmable}</TableCell>
                <TableCell align="right">{row.feePercentage}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;

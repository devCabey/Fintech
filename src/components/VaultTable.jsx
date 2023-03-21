import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(valuable, worth) {
  return { valuable, worth };
}

const rows = [
  createData("Diamond", "$500,000"),
  createData("Gold Bars", "$250,000"),
  createData("Gold Jewerels", "$200,000"),
];

function VaultTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <div className="flex items-center">
            <BsShieldLockFill className="text-gray-700" />
            <span className="ml-2">
              Permission required to view details of valuables
            </span>
          </div>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="text-sm font-semibold">Vaulable(s)</span>
            </TableCell>
            <TableCell align="right">
              <span className="text-sm font-semibold">Worth</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.valuable}>
              <TableCell component="th" scope="row">
                {row.valuable}
              </TableCell>
              <TableCell align="right">{row.worth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VaultTable;

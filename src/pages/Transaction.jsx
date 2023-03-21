import React from "react";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(transType, transID, transAmount) {
  return {
    transType,
    transID,
    transAmount,
    history: [
      {
        date: "2020-01-05",
        withdraw: "-",
        deposit: "50,000",
        balance: "120,000",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.transType == "Deposit" ? (
            <span className="flex items-center">
              <GiPayMoney className="text-green-500" />
              <h6 className="ml-2 text-green-500">Deposit</h6>
            </span>
          ) : (
            <span className="flex items-center">
              <GiReceiveMoney className="text-blue-500" />
              <h6 className="ml-2 text-blue-500">Withdraw</h6>
            </span>
          )}
        </TableCell>
        <TableCell align="right">{row.transID}</TableCell>
        <TableCell align="right">{row.transAmount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Transfer Date</TableCell>
                    <TableCell>Withdraw&nbsp;($)</TableCell>
                    <TableCell align="right">Deposit&nbsp;($)</TableCell>
                    <TableCell align="right">Balance&nbsp;($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.withdraw}</TableCell>
                      <TableCell align="right">{historyRow.deposit}</TableCell>
                      <TableCell align="right">{historyRow.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [createData("Deposit", "sdf98sf329", "50,000")];

function Transaction() {
  return (
    <div className="w-full ">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Transactions</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Transaction Type</TableCell>
                <TableCell align="right">Transaction ID</TableCell>
                <TableCell align="right">Amount&nbsp;($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.transID} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Transaction;

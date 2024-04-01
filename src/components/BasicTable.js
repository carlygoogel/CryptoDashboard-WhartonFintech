import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  SimpleDialog1  from './SimpleDialog1';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Symbol</StyledTableCell>
            <StyledTableCell align="right">Max Supply</StyledTableCell>
            <StyledTableCell align="right">Circulating Supply</StyledTableCell>
            <StyledTableCell align="right">Total Supply</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Volume 24h</StyledTableCell>
            <StyledTableCell align="right">Percent Change 24h</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
            <StyledTableCell align="right">Fully Diluted Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.id} onClick={() => handleRowClick(row)}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.symbol}</StyledTableCell>
              <StyledTableCell align="right">{row.maxSupply}</StyledTableCell>
              <StyledTableCell align="right">{row.circulatingSupply}</StyledTableCell>
              <StyledTableCell align="right">{row.totalSupply}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.volume24h}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: row.percentChange24h > 0 ? 'green' : 'red' }}>{row.percentChange24h}</StyledTableCell>
              <StyledTableCell align="right">{row.marketCap}</StyledTableCell>
              <StyledTableCell align="right">{row.fullyDilutedMarketCap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {selectedRow && (
        <SimpleDialog1
          selectedRow={selectedRow}
          open={open}
          onClose={handleClose}
        />
      )}
      </>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Page, {Items} from '../pagination/page'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export const Tabledata = () => {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">confirmed</TableCell>
              <TableCell align="right">Deaths</TableCell>
              <TableCell align="right">Recovered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Items.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">{item.confirmed}</TableCell>
                <TableCell align="right">{item.deaths}</TableCell>
                <TableCell align="right">{item.recovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
const url = " https://corona-api.com/countries";
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  //export const Tabledata = () => {
   
const Page = ({ country }) => {
    const classes = useStyles();
  console.log(country);
   const [Items, setItems] = useState([]);
  
  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get(`${url}/${country}?include=timeline`);
      console.log("data", data.data.timeline);
      setItems(data.data.timeline);
    }

    fetchMyAPI();
  }, [country]);
  console.log("items", Items);
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
                <TableCell >{item.date}</TableCell>
                <TableCell align="right">{item.confirmed}</TableCell>
                <TableCell align="right">{item.deaths}</TableCell>
                <TableCell align="right">{item.recovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  )
  
};

export default Page;

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./card.css";


const Cards = ({ data: { confirmed, deaths, recovered, date } , isLoading }) => {
    console.log(confirmed,deaths,recovered,date);
  if(isLoading){
      return 'loading....';
  }
  return (
    <div className="container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              confirmed
            </Typography>
            <Typography variant="h5" component="h2">
              {confirmed}
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2" component="p">
              No of confirmed cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             deaths
            </Typography>
            <Typography variant="h5" component="h2">
              {deaths}
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2" component="p">
              No of confirmed deaths
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              recovered
            </Typography>
            <Typography variant="h5" component="h2">
              {recovered}
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2" component="p">
             No of recovered people
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

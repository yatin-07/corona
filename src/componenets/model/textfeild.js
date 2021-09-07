import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    note: "",
    tags: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="note"
        label="Notes"
        name="note"
        value={values.note}
        onChange={handleChange}
      />
      <TextField
        id="tags"
        label="Tags"
        variant="outlined"
        name="tags"
        value={values.tags}
        onChange={handleChange}
      />
    </form>
  );
}

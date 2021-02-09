import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({title, setTitle}) {
  const classes = useStyles();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="IlanBasligi" label="Ilan Başliği" value={title} onChange={handleTitle}/>
    </form>
  );
}

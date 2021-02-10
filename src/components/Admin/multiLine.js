import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function MultilineTextFields({explanation, setExplanation}) {
  const classes = useStyles();
  

  const handleChange = (event) => {
    setExplanation(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       
        <TextField
          id="explanation"
          label="Açiklama"
          multiline
          rows={4}
          defaultValue="Aciklama"
          variant="outlined"
          value={explanation}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

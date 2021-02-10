import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectForProperty({id, labelId, label, roomNumber, setRoomNumber, labelName}) {
  const classes = useStyles();
  

  const handleRoomNumber = (event) => {
    setRoomNumber(event.target.value);
  };

  return (
    <div>
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={roomNumber}
          onChange={handleRoomNumber}
          label={label}
        >
          <MenuItem value={'1+1'}>1+1</MenuItem>
          <MenuItem value={'1.5+1'}>1.5+1</MenuItem>
          <MenuItem value={'2+0'}>2+0</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { style } from '@mui/system';

export default function BasicSelect({handleChange, language}) {

  
  return (
    <Box sx={{ minWidth: 220 }} style = {{marginTop : "1rem"}}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" style={{color:"white"}}>Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
          style={{color:"white"}}
        >
          <MenuItem value={"it"} >İtalian</MenuItem>
          <MenuItem value={"de"}>Germany</MenuItem>
          <MenuItem value={"tr"}>Turkish</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

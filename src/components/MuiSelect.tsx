import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
  //const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };
  console.log(countries);
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

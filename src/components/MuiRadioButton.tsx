import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from '@mui/material';
import { useState } from 'react';

export const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel>Years of experience</FormLabel>
      </FormControl>
      <RadioGroup
        name="job-experience-group"
        aria-labelledby="job-experience-group-label"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          control={<Radio size="small" color="secondary" />}
          label="0-2"
          value="0-2"
        />
        <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
        <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
      </RadioGroup>
      <FormHelperText>Invalid selection</FormHelperText>
    </Box>
  );
};

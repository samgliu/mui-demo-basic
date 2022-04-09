import { Box, TextField } from '@mui/material';

import { DateRange } from '@mui/lab';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { useState } from 'react';

export const MuiDateRangePick = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log('Date Range Pick value: ', value);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="check-in"
        endText="check-out"
        value={value}
        onChange={(val: any) => {
          setValue(val);
        }}
        renderInput={(start: any, end: any) => {
          return (
            <>
              <TextField {...start} />
              <Box sx={{ mx: 2 }}>to</Box>
              <TextField {...end} />
            </>
          );
        }}
      />
    </Box>
  );
};

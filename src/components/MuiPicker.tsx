import { DatePicker, DateTimePicker, TimePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';

import { useState } from 'react';

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log('selectedTime', selectedTime);
  console.log('selectedTime', selectedTime);
  console.log('selectedDateTime', selectedDateTime);
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label="Date Picker"
        renderInput={(param) => <TextField {...param} />}
        value={selectedDate}
        onChange={(val) => {
          setSelectedDate(val);
        }}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(param) => <TextField {...param} />}
        value={selectedTime}
        onChange={(val) => {
          setSelectedTime(val);
        }}
      />
      <DateTimePicker
        label="Date Time Picker"
        renderInput={(param) => <TextField {...param} />}
        value={selectedDateTime}
        onChange={(val) => {
          setSelectedDateTime(val);
        }}
      />
    </Stack>
  );
};

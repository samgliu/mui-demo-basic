import { InputAdornment, Stack, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';

export const MuiTextfield = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="small secondary"
          size="small"
          variant="outlined"
          color="secondary"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share information'}
        />
        <TextField
          label="Password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            startAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

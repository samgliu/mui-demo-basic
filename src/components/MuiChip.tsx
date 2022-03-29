import { useState } from 'react';
import { Avatar, Chip, Stack } from '@mui/material';

export const MuiChip = () => {
  const [chips, setChips] = useState(['chip1', 'chip2', 'chip3']);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert('Clicked')} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert('Delete clicked')}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="LOADING">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<HourglassEmptyIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton variant="outlined">Save</LoadingButton>
    </Stack>
  );
}

export default MuiLoadingButton;

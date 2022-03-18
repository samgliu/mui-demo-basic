import { Stack } from '@mui/material';
import './App.css';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiButton } from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiLayout } from './components/MuiLayout';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextfield } from './components/MuiTextField';
//import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      <Stack spacing={1}>
        <MuiButton />
        <MuiTextfield />
        <MuiSelect />
        <MuiRadioButton />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutocomplete />
        <MuiLayout />
      </Stack>
    </div>
  );
}

export default App;

import { Stack } from '@mui/material';
import './App.css';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiButton } from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiLayout } from './components/MuiLayout';
import { MuiMuiImageList } from './components/MuiImageList';
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
        <MuiCard />
        <MuiAccordion />
        <MuiMuiImageList />
      </Stack>
    </div>
  );
}

export default App;

import { Stack } from '@mui/material';
import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextfield } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      <Stack spacing={1}>
        <MuiButton />
        <MuiTextfield />
        <MuiSelect />
        <MuiRadioButton />
      </Stack>
    </div>
  );
}

export default App;

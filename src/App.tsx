import { AppBar, Stack } from '@mui/material';
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
import { MuiNavbar } from './components/MuiNavbar';
import { MuiLink } from './components/MuiLink';
import MuiBreadcrumbs from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiTable } from './components/MuiTable';
import { MuiAlert } from './components/MuiAlert';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiDialog } from './components/MuiDialog';
import MuiProgress from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
//import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      <MuiNavbar />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiTooltip />
      <Stack spacing={2}>
        <MuiList />
        <MuiChip />
        <MuiAvatar />
        <MuiBadge />
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
        <MuiLink />
      </Stack>
      <MuiTable />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog />
      <MuiBottomNavigation />
      <MuiSpeedDial />
      <MuiProgress />
      <MuiSkeleton />
    </div>
  );
}

export default App;

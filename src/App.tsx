import './App.css';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import { MuiTypography } from './components/MuiTypography';
import { LocalizationProvider } from '@mui/lab';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAlert } from './components/MuiAlert';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import MuiBreadcrumbs from './components/MuiBreadcrumbs';
import { MuiButton } from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiChip } from './components/MuiChip';
import { MuiDateRangePick } from './components/MuiDateRangePick';
import { MuiDialog } from './components/MuiDialog';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiLayout } from './components/MuiLayout';
import { MuiLink } from './components/MuiLink';
import { MuiList } from './components/MuiList';
import MuiLoadingButton from './components/MuiLoadingButton';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiMuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiPicker } from './components/MuiPicker';
import MuiProgress from './components/MuiProgress';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTable } from './components/MuiTable';
import { MuiTabs } from './components/MuiTabs';
import { MuiTextfield } from './components/MuiTextField';
import { MuiTimeline } from './components/MuiTimeline';
import { MuiTooltip } from './components/MuiTooltip';
import { Stack } from '@mui/material';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiTypography /> */}
        <MuiNavbar />
        <MuiBreadcrumbs />
        <MuiDrawer />
        <MuiTooltip />
        <Stack spacing={2}>
          <MuiLoadingButton />
          <MuiTabs />
          <MuiTimeline />
          <MuiMasonry />
          <MuiDateRangePick />
          <MuiPicker />
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
        {/* <MuiBottomNavigation /> */}
        <MuiSpeedDial />
        <MuiProgress />
        <MuiSkeleton />
      </div>
    </LocalizationProvider>
  );
}

export default App;

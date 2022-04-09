import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export const MuiTabs = () => {
  const [value, setValue] = useState<string>('1');
  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setValue(newVal);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList
            aria-label="Tabs example"
            textColor="secondary"
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab 1"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Tab 2" value="2" disabled />
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
        <TabPanel value="4">Panel 4</TabPanel>
        <TabPanel value="5">Panel 5</TabPanel>
      </TabContext>
    </Box>
  );
};

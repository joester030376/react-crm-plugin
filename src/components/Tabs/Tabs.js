import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import ClientInfo from '../ClientInfo/ClientInfo';


function TabMenu() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

    return (
        <Box>
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label="Client Info" />
                    <Tab label="Forms" />
                    <Tab label="Resources" />`
                    <Tab label="Calendar" />
                    <Tab label="News and Announcements" />
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                <Box>
                    <ClientInfo />
                </Box>
                )}
                {tabIndex === 1 && (
                <Box>
                    <Typography>The second tab</Typography>
                </Box>
                )}
                {tabIndex === 2 && (
                <Box>
                    <Typography>The third tab</Typography>
                </Box>
                )}
            </Box>
        </Box>
    );
}
export default TabMenu;
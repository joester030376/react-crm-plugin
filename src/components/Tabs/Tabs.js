import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import ClientInfo from '../ClientInfo/ClientInfo';
import IntakeForm from '../Forms/IntakeForm';


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
                    <IntakeForm />
                </Box>
                )}
                {tabIndex === 2 && (
                <Box>
                    <Typography>Resources Under Development</Typography>
                </Box>
                )}
                {tabIndex === 3 && (
                <Box>
                    <Typography>Calendar Under Development</Typography>
                </Box>
                )}
                {tabIndex === 4 && (
                <Box>
                    <Typography>News and Announcements Under Development</Typography>
                </Box>
                )}
            </Box>
        </Box>
    );
}
export default TabMenu;
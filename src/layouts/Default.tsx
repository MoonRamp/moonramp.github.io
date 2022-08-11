import type { Component } from 'solid-js';

import { createTheme, ThemeProvider } from '@suid/material/styles';

import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import Stack from '@suid/material/Stack';
import Toolbar from '@suid/material/Toolbar';
import Typography from '@suid/material/Typography';

import CryptoMatrix from '../components/CryptoMatrix';
import GetHelpButton from '../components/GetHelpButton';

const Default: Component = (props) => {
  return (
    <Box>
      <CryptoMatrix/>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              <Button disableRipple color='inherit' href='/'>MoonRamp</Button>
            </Typography>
            <Button color='inherit' href='/faq'>FAQ</Button>
            <Button color='inherit' href='/doc'>Documentation</Button>
            <Button color='inherit' href='/api'>API</Button>
            <Button color='inherit' href='https://github.com/MoonRamp/moonramp'>Github</Button>
          </Toolbar>
        </AppBar>
	    <>{props.children}</>
      </Box>
      <Box sx={{bgcolor: 'primary.main', height: '100%', 'min-height': '5em'}} padding={2}>
	    <Stack height='100%' justifyContent='center' alignItems='center' spacing={1}>
          <Typography variant='h6' align='center' color='primary.contrastText'>Copyright {new Date().getFullYear()} MoonRamp Developers</Typography>
        </Stack>
      </Box>
	  <GetHelpButton/>
    </Box>
  );
};

export default Default;

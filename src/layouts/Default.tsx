import type {Component} from 'solid-js';

import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import IconButton from '@suid/material/IconButton';
import Stack from '@suid/material/Stack';
import Toolbar from '@suid/material/Toolbar';
import Typography from '@suid/material/Typography';

import CryptoMatrix from '../components/CryptoMatrix';

import GitHubIcon from '../components/GitHub';

const Default: Component = (props) => {
  return (
    <Box>
      <CryptoMatrix />
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" href="/" sx={{flexGrow: 1}}>
              <Button disableRipple color="inherit" href="/">
                MoonRamp
              </Button>
            </Typography>
            <Button color="inherit" href="https://moonramp.github.io/book">
              Docs
            </Button>
            <Button color="inherit" href="https://docs.rs/moonramp/latest">
              API
            </Button>
            <IconButton color="inherit" href="https://github.com/MoonRamp/moonramp">
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <>{props.children}</>
      </Box>
      <Box sx={{bgcolor: 'primary.main', height: '100%', 'min-height': '5em'}} padding={2}>
        <Stack height="100%" justifyContent="center" alignItems="center" spacing={1}>
          <Typography variant="h6" align="center" color="primary.contrastText">
            Copyright {new Date().getFullYear()} MoonRamp Developers
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Default;

import { Component } from 'solid-js';

import Box from '@suid/material/Box';

import './MoonRampDocsSplash.css';

import splashUrl from '../assets/moonramp_docs.png';

const MoonRampDocsSplash: Component = () => {
  return (
    <Box align='center'>
      <img class='moonramp-splash' src={splashUrl}/>
    </Box>
  );
};

export default MoonRampDocsSplash;

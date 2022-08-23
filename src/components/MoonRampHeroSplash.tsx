import { Component } from 'solid-js';

import Box from '@suid/material/Box';

import './MoonRampHeroSplash.css';

import splashUrl from '../assets/moonramp_icon.png';

const MoonRampHeroSplash: Component = () => {
  return (
    <Box align='center'>
      <img class='moonramp-splash' src={splashUrl}/>
    </Box>
  );
};

export default MoonRampHeroSplash;

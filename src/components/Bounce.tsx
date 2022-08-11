import { Component } from 'solid-js';

import Box from '@suid/material/Box';
import Card from '@suid/material/Card';

import './Bounce.css';

const Bounce: Component = (props) => {
  return (
    <div class="bounce">
      <Box>
        <>{props.children}</>
      </Box>
    </div>
  );
};

export default Bounce;

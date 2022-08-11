import { Component, createSignal } from 'solid-js';

import Alert from '@suid/material/Alert';
import Button from '@suid/material/Button';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import Fade from '@suid/material/Fade';

const PreAlphaWarning: Component = () => {
  const [active, setActive] = createSignal(true);
  return (
    <Fade in={ active() }>
      <Alert
        severity='error'
      >
        MoonRamp is pre-alpha and not ready for general adoption. Follow the GitHub project for updates.
      </Alert>
    </Fade>
  );
};

export default PreAlphaWarning;

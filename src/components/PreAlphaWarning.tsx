import { Component } from 'solid-js';

import Alert from '@suid/material/Alert';
import Container from '@suid/material/Container';

const PreAlphaWarning: Component = () => {
  return (
    <Container>
      <Alert
        severity='error'
      >
        MoonRamp is pre-alpha and not ready for general adoption. Follow the GitHub project for updates.
      </Alert>
    </Container>
  );
};

export default PreAlphaWarning;

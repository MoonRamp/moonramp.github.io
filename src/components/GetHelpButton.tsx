import {Component} from 'solid-js';

import Box from '@suid/material/Box';
import Fab from '@suid/material/Fab';

import HelpIcon from '@suid/icons-material/Help';

const GetHelpButton: Component = () => {
  return (
    <div>
      <Box position="fixed" right={10} bottom={20} sx={{'& > :not(style)': {m: 0}}}>
        <Fab color="secondary" aria-label="help" href="/faq">
          <HelpIcon fontSize="large" />
        </Fab>
      </Box>
    </div>
  );
};

export default GetHelpButton;

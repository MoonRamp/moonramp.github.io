import { Component, createSignal } from 'solid-js';

import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import Fab from '@suid/material/Fab';
import Modal from '@suid/material/Modal';
import useTheme from '@suid/material/styles/useTheme';

import HelpIcon from '@suid/icons-material/Help';

const GetHelpButton: Component = () => {
  const theme = useTheme();
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        position='fixed'
        right={10}
        bottom={20}
        sx={{ '& > :not(style)': { m: 0 } }}
       >
        <Fab
		  color='secondary'
		  aria-label='help'
          onClick={handleOpen}
		>
          <HelpIcon fontSize='large'/>
        </Fab>
      </Box>
    </div>
  );
};

export default GetHelpButton;

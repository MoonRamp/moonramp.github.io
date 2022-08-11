import { Component } from 'solid-js';

import Container from '@suid/material/Container';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';

import './CryptoGridCircle.css';

const CryptoGridCircle: Component = (props) => {
  return (
    <Container disableGutters>
      <div class='grow'>
		<div style='position: relative;'>
          <img class='crypto-grid-circle shadow' src={props.image}/>
		  <div class='crypto-grid-circle blank'>
		    <div style='position: relative;'>
		      <img class='crypto-grid-circle' src={props.blankImage}/>
		      <div class='crypto-grid-circle blank'>
			    <Stack height='100%' justifyContent='center' alignItems='center'>
		          <Typography variant='h4' align='center' color='primary.contrastText'>{props.ticker}</Typography>
				</Stack>
		      </div>
		    </div>
		  </div>
	    </div>
      </div>
    </Container>
  );
};

export default CryptoGridCircle;

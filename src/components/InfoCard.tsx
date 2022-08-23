import {Component} from 'solid-js';

import Card from '@suid/material/Card';
import Container from '@suid/material/Container';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';

import './InfoCard.css';

const InfoCard: Component = (props) => {
  return (
    <Container>
      <div class="grow">
        <Card sx={{padding: 4, 'min-height': '18em'}}>
          <Stack spacing={4} alignItems="center">
            <>{props.icon}</>
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="subtitle1">{props.info}</Typography>
          </Stack>
        </Card>
      </div>
    </Container>
  );
};

export default InfoCard;

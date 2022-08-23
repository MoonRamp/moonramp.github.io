import type {Component} from 'solid-js';

import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import Container from '@suid/material/Container';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';

import QrCode from '../components/QrCode';

import bitcoinUrl from '../assets/crypto/bitcoin-256.png';
import moneroUrl from '../assets/crypto/monero-256.png';

const FaqItem: Component = (props) => {
  return (
    <Card>
      <Box padding={1} sx={{'word-break': 'break-word'}}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="subtitle1">{props.answer}</Typography>
        <>{props.children}</>
      </Box>
    </Card>
  );
};
const Faq: Component = () => {
  return (
    <Box>
      <Stack padding={4} spacing={5}>
        <FaqItem
          title="How can I contribute?"
          answer="The best way to contribute is to use MoonRamp! Accept payments in crypto and spread the word! Contributions in the form of code submissions are also welcome!"
        />
        <FaqItem title="Can I dontate to the project?" answer="Yes, see the methods bellow" />
        <Stack pt={2} spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="h6">Monero:</Typography>
          <Container align="center" sx={{'word-break': 'break-word'}}>
            <Typography variant="subtitle2">
              468ZeZpnUdfXjkzvzt1QBcA5SU1coDg1z7CtKhzixfQabT1zUQt6YivN7XAAGbUzt4i6hXqkNTc82TzAG4FiLag1GK7xPSk
            </Typography>
          </Container>
          <QrCode
            data="monero:468ZeZpnUdfXjkzvzt1QBcA5SU1coDg1z7CtKhzixfQabT1zUQt6YivN7XAAGbUzt4i6hXqkNTc82TzAG4FiLag1GK7xPSk"
            image={moneroUrl}
            cornersSquareColor="#FF6600"
          />

          <Typography variant="h6">Bitcoin:</Typography>
          <Container align="center" sx={{'word-break': 'break-word'}}>
            <Typography variant="subtitle2">bc1qefwe0jnue2327zjpef8e80ndyt24xjsqgt33ek</Typography>
          </Container>
          <QrCode
            data="bitcoin:bc1qefwe0jnue2327zjpef8e80ndyt24xjsqgt33ek"
            image={bitcoinUrl}
            cornersSquareColor="#F99400"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Faq;

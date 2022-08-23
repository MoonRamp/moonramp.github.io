import { Component } from 'solid-js';

import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
//import useMediaQuery from "@suid/material/useMediaQuery"; https://github.com/swordev/suid/issues/88

import IcecreamIcon from '@suid/icons-material/Icecream';
import LockIcon from '@suid/icons-material/Lock';
import ScienceIcon from '@suid/icons-material/Science';

import BenefitList from '../components/BenefitList';
import Bounce from '../components/Bounce';
import ComparisonTable from '../components/ComparisonTable';
import CryptoGridCircle from '../components/CryptoGridCircle';
import FadeCarousel from '../components/FadeCarousel';
import GetHelpButton from '../components/GetHelpButton';
import InfoCard from '../components/InfoCard';
import MoonRampDocsSplash from '../components/MoonRampDocsSplash';
import MoonRampHeroSplash from '../components/MoonRampHeroSplash';
import PreAlphaWarning from '../components/PreAlphaWarning';
import QrCode from '../components/QrCode';

import bitcoinUrl from '../assets/crypto/bitcoin-256.png';
import bitcoinBlankUrl from '../assets/crypto/bitcoin-blank-256.png';
import bitcoinCashUrl from '../assets/crypto/bitcoin-cash-256.png';
import bitcoinCashBlankUrl from '../assets/crypto/bitcoin-cash-blank-256.png';
import ethereumUrl from '../assets/crypto/ethereum-256.png';
import ethereumBlankUrl from '../assets/crypto/ethereum-blank-256.png';
import ethereumClassicUrl from '../assets/crypto/ethereum-classic-256.png';
import ethereumClassicBlankUrl from '../assets/crypto/ethereum-classic-blank-256.png';
import moneroUrl from '../assets/crypto/monero-256.png';
import moneroBlankUrl from '../assets/crypto/monero-blank-256.png';

const Home: Component = () => {
  return (
    <Box>
      <Grid sx={{ padding: 6 }} container rowSpacing={8} columnSpacing={1}>
        <Grid item xs={12}>
          <PreAlphaWarning/>
        </Grid>

        <Grid item xs={12} md={6}>
	      <Stack spacing={10}>
            <Box pl={5}>
              <Typography variant='h3'>Accept Crypto Payments with No Fees & No Third-Party</Typography>
            </Box>
	  	  <Container>
	  	    <Stack direction='row' justifyContent='center' alignItems='center' spacing={10}>
	  	      <Button variant='contained' size='large'>Get Started</Button>
	  	      <Button variant='outlined' size='large'>GitHub</Button>
	  	    </Stack>
	  	  </Container>
	  	</Stack>
        </Grid>

        <Grid item xs={12} md={6}>
	    <Bounce>
	      <FadeCarousel>
            <QrCode data='https://moonramp.github.io?ticker=btc' image={bitcoinUrl} cornersSquareColor='#F99400'></QrCode>
            <QrCode data='https://moonramp.github.io?ticker=bch' image={bitcoinCashUrl} cornersSquareColor='#2FCF6E'></QrCode>
            <QrCode data='https://moonramp.github.io?ticker=xmr' image={moneroUrl} cornersSquareColor='#FF6600'></QrCode>
            <QrCode data='https://moonramp.github.io?ticker=eth' image={ethereumUrl} cornersSquareColor='#454A75'></QrCode>
            <QrCode data='https://moonramp.github.io?ticker=etc' image={ethereumClassicUrl} cornersSquareColor='#3AB83A'></QrCode>
	      </FadeCarousel>
	    </Bounce>
        </Grid>

        <Grid item xs='none' md={1}>
        </Grid>
        <Grid item xs={12} md={2}>
          <CryptoGridCircle
	  	    image={bitcoinUrl}
	  	    blankImage={bitcoinBlankUrl}
	  	    ticker='BTC'
	  	  />
        </Grid>
        <Grid item xs='none' md={2}>
        </Grid>
        <Grid item xs={12} md={2}>
          <CryptoGridCircle 
	        image={moneroUrl}
	  	    blankImage={moneroBlankUrl}
	  	    ticker='XMR'
	  	  />
        </Grid>
        <Grid item xs='none' md={2}>
        </Grid>
        <Grid item xs={12} md={2}>
          <CryptoGridCircle 
	  	    image={bitcoinCashUrl}
	  	    blankImage={bitcoinCashBlankUrl}
	  	    ticker='BCH'
	  	  />
        </Grid>
        <Grid item xs='none' md={1}>
        </Grid>

        <Grid item xs='none' md={1}>
        </Grid>
        <Grid item xs='none' md={2}>
        </Grid>
        <Grid item xs={12} md={2}>
          <CryptoGridCircle 
            image={ethereumClassicUrl}
	  	    blankImage={ethereumClassicBlankUrl}
	  	    ticker='ETC'
	  	  />
        </Grid>
        <Grid item xs='none' md={2}>
        </Grid>
        <Grid item xs={12} md={2}>
          <CryptoGridCircle 
            image={ethereumUrl}
	  	    blankImage={ethereumBlankUrl}
	  	    ticker='ETH'
	  	  />
        </Grid>
        <Grid item xs='none' md={2}>
        </Grid>
        <Grid item xs='none' md={1}>
        </Grid>

        <Grid item xs={12}>
	      <Stack justifyContent='center' alignItems='center' spacing={4}>
	        <Box width='80%' ml='auto' mr='auto'>
	          <Stack justifyContent='center' alignItems='center' spacing={4}>
	            <Typography variant='h3' align='center'>Censorship resistant global payments</Typography>
	            <Typography variant='h4' align='center'>Financial freedom</Typography>
	          </Stack>
	        </Box>
	  	  <Box>
	  	    <BenefitList/>
	  	  </Box>
	      </Stack>
        </Grid>

        <Grid item xs={1} md={4}>
        </Grid>
        <Grid item xs={10} md={4}>
	      <MoonRampHeroSplash/>
        </Grid>
        <Grid item xs={1} md={4}>
        </Grid>

        <Grid item xs={12} md={4}>
	      <InfoCard
            icon={<LockIcon fontSize='large'/>}
	  	  title='Secure'
	  	  info='Role Based Access Control, Multiple Layers of Encryption, Hot and Cold Wallet Support'
	  	/>
        </Grid>
        <Grid item xs={12} md={4}>
	      <InfoCard
            icon={<ScienceIcon fontSize='large'/>}
	  	  title='Advanced'
	  	  info='WASM program runtime, REST & JsonRPC APIs, websockets, and robust sql backend support'
	  	/>
        </Grid>
        <Grid item xs={12} md={4}>
	      <InfoCard
            icon={<IcecreamIcon fontSize='large'/>}
	  	  title='Cyberpunk'
	  	  info='Built by crypto maximalist for everyone. Giving financial independence back to the people'
	  	/>
        </Grid>

        <Grid item xs={12} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <ComparisonTable/>
        </Grid>
        <Grid item xs={12} md={1}>
        </Grid>

        <Grid item xs={12} md={1}>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack alignItems='left' justifyContent='left' spacing={5}>
            <Typography variant='h3'>Explore the docs</Typography>
            <Typography variant='subtitle1'>Learn about how to deploy MoonRamp and the integrate with the API</Typography>
	  	    <Stack direction='row' justifyContent='center' alignItems='center' spacing={10}>
              <Button variant='outlined' size='large' href='https://moonramp.github.io/book'>Docs</Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <MoonRampDocsSplash/>
        </Grid>
        <Grid item xs={12} md={1}>
        </Grid>
      </Grid>
	  <GetHelpButton/>
    </Box>
  );
};

export default Home;

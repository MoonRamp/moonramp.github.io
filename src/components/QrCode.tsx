import { Component, createResource, Show } from 'solid-js';

import QRCodeStyling from 'qr-code-styling';

import Container from '@suid/material/Container';
import Typography from '@suid/material/Typography';
import Stack from '@suid/material/Stack';
import Box from '@suid/material/Box';
import Card from '@suid/material/Card';

const generateQrCode = async (options) => {
  const qrCode = new QRCodeStyling(options);
  return await qrCode.getRawData('svg');
}

const QrCode: Component = (props) => {
  const [qrCode] = createResource({
      width: 300,
      height: 300,
      type: 'svg',
      data: props.data,
      image: props.image,
      dotsOptions: {
        color: props.dotsColor || '#000000',
        type: props.dotsType || 'squre'
      },
	  cornersSquareOptions: {
        color: props.cornersSquareColor || '#000000', 
		type: props.cornersSquareType || 'extra-rounded'
	  },
      cornersDotOptions: {
        color: props.cornersDotColor || '#000000', 
		type: props.cornersDotType || 'square'
	  },
      backgroundOptions: {
        color: props.backgroundColor || '#F8F7F1',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10,
		imageSize: 0.5,
      },
	  qrOptions: {
        errorCorrectionLevel: 'H'
	  }
  }, generateQrCode);

  return (
    <Container>
      <Show when={!qrCode.loading}>
        <Box width='100%' maxWidth='350px' ml='auto' mr='auto'>
		  <Card sx={{ padding: 2 }}>
		  <Stack alignItems='center' rowSpacing={2}>
            <Box width='90%' maxWidth='300px' ml='auto' mr='auto'>
		      <img width='100%' src={URL.createObjectURL(qrCode())}/>
		    </Box>
			<Typography variant='subtitle1' align='center'>Powered by MoonRamp</Typography>
		  </Stack>
		  </Card>
        </Box>
      </Show>
    </Container>
  );
};

export default QrCode;

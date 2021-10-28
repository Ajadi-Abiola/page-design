import React , {useRef} from 'react';
import {Box, Stack , BackgroundView, Direction, Button, Alignment,PaddingSize, Grid, Text, EqualGrid} from '@kibalabs/ui-react'

export const About = () => {
  const titleRef = useRef()
  return (
<Stack direction={Direction.Horizontal} shouldWrapItems={true} isFullHeight={true}>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <BackgroundView color='#afefef'>
        <Box width='30px' height='50px' />
      </BackgroundView>
      <Box isFullWidth={true} />
    </Stack>




  );
};

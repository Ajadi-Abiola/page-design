import React, { useRef } from 'react';
import { Box, Grid, Text } from '@kibalabs/ui-react'

export const About = () => {
  const titleRef = useRef()
  return (
    <Box variant='aboutBanner'>
      <Grid shouldAddGutters={true} isFullHeight={false}>
        <Grid.Item
          sizeResponsive={{ base: 12, medium: 6 }} >
          <Text variant='header3' >What Are fun Dogs</Text>
          <Text variant='bodyText'>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
        </Grid.Item>

        <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}>
        </Grid.Item>
      </Grid>
    </Box>
  );
};

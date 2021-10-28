import React from 'react';
import {Box, Stack , BackgroundView, Direction, Button, Alignment,PaddingSize, Grid, Text, EqualGrid} from '@kibalabs/ui-react'

export const FutureofFunDog = () => {
  return (
<Box variant='futureBanner'>
                <Grid shouldAddGutters={true}  isFullHeight={false}>
                    <Grid.Item 
                     sizeResponsive={{base:12 , medium:6}} >
                    
                       
                       <Text variant='header3' >Future of Cool Dogs?</Text>
                       <Text variant='bodyText'>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled dogs from over 300k total options. Cool dogs that have a variety of outfits, faces and colors - all dogs are cool, but completed outfit dogs are the coolest. Each Cool Dog is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
                    </Grid.Item>
                   
                    <Grid.Item sizeResponsive={{base:12 , medium:6}}>
                    </Grid.Item>
                    </Grid>
                </Box>





  );
};

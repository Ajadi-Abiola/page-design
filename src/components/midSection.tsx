import React from 'react';
import { Box, Stack, BackgroundView, Direction, Button, Alignment, PaddingSize, Grid, Text,Image } from '@kibalabs/ui-react'

export const MidSection = () => {
    return (
     
     <Box variant='midSection'>
                <Grid shouldAddGutters={true}  isFullHeight={false}>
                    <Grid.Item 
                     sizeResponsive={{base:12 , medium:6}} >
                         <Box height= '100px'>
                       <Image 
                source='panda-gb1f621f54_1280.png'
                alternativeText='question'
                isFullWidth={false}
                fitType='scale'
              /></Box>
                       <Text variant='header3'> Why Get a Cool Dog?</Text>
                       <Text variant='bodyText'>Aside from participating in one the freaking coolest, curated but randomized NFT projects to date and getting a kick butt profile picture - you can help us evolve and build the future of Cool Cats. We’re giving back 20% of all ETH raised to the community (through contests, raffles, and more) - because we genuinely want Cool Cats to be a community driven and centric project. By getting a Cool Cat you have a voice in the community and can help guide the direction of the project. We’ll need help from you guys to determining specifics for future developments like breeding, next generation Cool Cats, the app, and much more!</Text>
                    </Grid.Item>
                   
                    <Grid.Item sizeResponsive={{base:12 , medium:6}}>
                    <Button variant='priceBtn' text='Ξ 0.02' />
                    <Text variant='header3'> Alright, How much?</Text>
                           
                         
                            <Text variant ='bodyText'>Cool Cats are priced at a flat rate (0.06 Ξ), and remember - Blue Cat Skin is exclusive to Gen 1!</Text>
                    </Grid.Item>
                </Grid>
                </Box>




    



    );
};

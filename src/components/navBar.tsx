import React , { useRef } from 'react';
import { Box, Stack, BackgroundView, Direction, Button, Alignment, PaddingSize, Grid, Text, EqualGrid } from '@kibalabs/ui-react'

export const NavBar = () =>  {
   
    return (
        <Stack  direction={Direction.Vertical} isFullHeight={true} isFullWidth={true}>
            <BackgroundView color='#7790D9'>
                <EqualGrid  childSizeResponsive={{base:6, medium:4}} isFullHeight={false}>
                    <Text variant='navHeader'>SOLD OUT </Text>
                    <Text variant='navHeader'> WOW!!!</Text>
                </EqualGrid>
            </BackgroundView>
            <Box variant='navBar2' height='150px' isFullHeight={true}>
                <Grid shouldAddGutters={true} >
                    <Grid.Item 
                     sizeResponsive={{base:6 , medium:4}} >
                      
                            <Button variant='dogBtn' isFullWidth={true} text='MY DOGS' />
                    
                    </Grid.Item>
                    <Grid.Item  sizeResponsive={{base:6 , medium:4}}>
                      

                            <Button variant='galleryBtn' isFullWidth={true} text='GALLERY' />
               
                    </Grid.Item> 
                    <Grid.Item sizeResponsive={{base:6 , medium:4}}>
                        <a href='#faq'>
                            <Button variant='faqBtn'  isFullWidth={true} text='FAQ' />/
                           </a >
                    </Grid.Item>
                </Grid>
            </Box>





        </Stack>



    );
};

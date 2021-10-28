import React from 'react';
import { Box, Stack, BackgroundView, Direction, Button, Alignment, PaddingSize, Grid, Text,Image, LinkBase } from '@kibalabs/ui-react'

export const ImageSection = () => {
    return (
   
       
        <Box variant='imageBanner' isFullHeight={true}  >
          <Image
            source='/dogpicture.jpg'
            alternativeText='dog'
            isFullWidth={true}
            fitType='scale'
          />
        </Box>
      



    



    );
};

import React from 'react';
import {Box, Stack , BackgroundView, Direction, Button, Alignment,PaddingSize, Grid, Text, EqualGrid} from '@kibalabs/ui-react'

export const WhyCat = () => {
  return (

<Box height='300px'>
<Stack direction={Direction.Vertical} >
 
    
 

   <Stack.Item  >
   <Box variant='navBar2' height='150px'>
      <Grid shouldAddGutters={true} >
      <Grid.Item size={5}>
      <BackgroundView color='#7790D9'>
              <Box height='250px'>

              </Box>
     </BackgroundView>
        </Grid.Item>
        <Grid.Item size={2}>
                 <Box></Box>
             </Grid.Item>
        <Grid.Item size={5}>
        <BackgroundView color='orange'>
      <Box height='150px'>

      </Box>
           </BackgroundView>
            
        </Grid.Item>
       
        </Grid>
   </Box>
        
      
        
        </Stack.Item>
  
</Stack>
</Box>
  

  );
};

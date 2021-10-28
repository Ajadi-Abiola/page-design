import React from 'react';
import { Box, Stack, Direction, LinkBase, Image, Button, Grid, Alignment, PaddingSize, Text, IconButton, KibaIcon, Spacing, WebView, EqualGrid} from '@kibalabs/ui-react';

export const Footer = () => {
  return (
    // <Box variant='fBanner'  >
    //   <Stack direction={Direction.Horizontal} childAlignment={Alignment.Start} shouldWrapItems={true} padding={PaddingSize.Wide1}>
    //     <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} >
    //       <LinkBase target='/'>
    //         <Box height='70px'  >
    //           <Image
    //             source='/ODG-04.jpg'
    //             alternativeText='Home'
    //             isFullWidth={false}
    //             fitType='scale'
    //           />
    //         </Box>
    //       </LinkBase>
    //       </Stack>
    
    //     <Stack direction={Direction.Horizontal} childAlignment={Alignment.Start} padding={PaddingSize.Wide1}>
    //       <LinkBase
    //         target='https://www.twitter.com'
    //         targetShouldOpenSameTab={false}>
    //       <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
    //       <LinkBase
    //         target='https://www.medium.com'
    //         targetShouldOpenSameTab={false}>
    //       <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
    //       <LinkBase
    //         target='https://www.discord.com'
    //         targetShouldOpenSameTab={false}>
    //       <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
    //     </Stack>
    //     <Stack direction={Direction.Horizontal}>
    //     <Text>@ fun dogs LLC</Text>
    //     </Stack>
    //   </Stack>
    
    
    // </Box>

//     <Box variant='footerBanner' height='150px'>
//     <Grid shouldAddGutters={true} >
//         <Grid.Item 
//          sizeResponsive={{base:6 , medium:4}} >
//            <LinkBase target='/'>
//           <Box isFullWidth={true} height='70px'  >
//             <Image
//               source='/ODG-04.jpg'
//               alternativeText='Home'
//               isFullWidth={false}
//               fitType='scale'
//             />
//           </Box>
//         </LinkBase>
//         </Grid.Item>
      
//         <Grid.Item   sizeResponsive={{base:6 , medium:4}}>
//         <Stack isFullWidth={true} direction={Direction.Horizontal} childAlignment={Alignment.Center} >
//         <LinkBase
//            target='https://www.twitter.com'
//            targetShouldOpenSameTab={false}>
//          <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
//          <LinkBase
//            target='https://www.medium.com'
//            targetShouldOpenSameTab={false}>
//          <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
//          <LinkBase
//            target='https://www.discord.com'
//            targetShouldOpenSameTab={false}>
//          <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
//          </Stack>
//         </Grid.Item> 
      
//         <Grid.Item  sizeResponsive={{base:6 , medium:4}}>
         
//         <Text variant='footerText'>@ fun dogs LLC</Text>
      
//         </Grid.Item>
//     </Grid>
// </Box>
<Box variant='footerBanner' isFullHeight={true} isFullWidth={true} >
<EqualGrid childSizeResponsive={{base:12 , medium:4}}  >

        
        
         <Box isFullWidth={true} height='70px'  >
           <Image
             source='/ODG-04.jpg'
             alternativeText='Home'
             isFullWidth={false}
             fitType='scale'
           />
         </Box>
       
     
<Stack direction={Direction.Horizontal} isFullWidth={true} childAlignment={Alignment.Start} padding={PaddingSize.Wide1}>

         <LinkBase
            target='https:www.twitter.com'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
          <LinkBase
            target='https:www.medium.com'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
          <LinkBase
            target='https:www.discord.com'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
         </Stack>

         <Text variant='footerText'>@ fun dogs LLC</Text>

</EqualGrid>
</Box>
  );
};

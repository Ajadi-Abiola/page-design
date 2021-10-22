import React from 'react';
import { Box, Stack, Direction, LinkBase, Image, Button, Alignment, PaddingSize, Text, IconButton, KibaIcon, Spacing, WebView} from '@kibalabs/ui-react';

export const Header = () => {
  return (
    <Box width='' variant='hBanner'  >
      <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} shouldWrapItems={true} padding={PaddingSize.Wide1}>
        <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} >
          <LinkBase target='/'>
            <Box height='70px'  >
              <Image
                source='/ODG-04.jpg'
                alternativeText='Home'
                isFullWidth={false}
                fitType='scale'
              />
            </Box>
          </LinkBase>
          <Spacing variant={PaddingSize.Wide2} />
          <Box>
            <Text variant='hTitle'>Fun Dogs</Text>
            </Box>
            </Stack>
        <Spacing variant={PaddingSize.Wide2} />
        <Stack direction={Direction.Horizontal}>
          <LinkBase>Learn</LinkBase>
          <Spacing variant={PaddingSize.Wide2} />
          <LinkBase>Rarity</LinkBase>
          <Spacing variant={PaddingSize.Wide2} />
          <LinkBase>FAQ</LinkBase>
          <Spacing variant={PaddingSize.Wide2} />
          <LinkBase>Roadmap</LinkBase>
        </Stack>
        <Spacing variant={PaddingSize.Wide2} />
        <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} contentAlignment={Alignment.End} padding={PaddingSize.Wide1}>
          <LinkBase
            target='https://www.notion.so/kibalabs/everypage-learning-12109edaac1e4d5eb08672cadaa2fc26'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
          <LinkBase
            target='https://www.notion.so/kibalabs/everypage-learning-12109edaac1e4d5eb08672cadaa2fc26'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
          <LinkBase
            target='https://www.notion.so/kibalabs/everypage-learning-12109edaac1e4d5eb08672cadaa2fc26'
            targetShouldOpenSameTab={false}>
          <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
        </Stack>
      </Stack>
      <Stack >
        <Box width='500px' height='500px' variant='hGif'>
          <Stack isFullWidth={true} isFullHeight={true} direction={Direction.Horizontal} childAlignment={Alignment.Center} contentAlignment={Alignment.Center}>
            <WebView url={'2RNM.gif'} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

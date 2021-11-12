import React from 'react';
import { Box, Stack, Direction, LinkBase, Image, Button, Alignment, PaddingSize, Text, IconButton, KibaIcon, Spacing, ResponsiveHidingView, ScreenSize, HidingView } from '@kibalabs/ui-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const onMenuClicked = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Box variant='hBanner'  >
      <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} shouldWrapItems={true} padding={PaddingSize.Wide1}>
        {/* <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} > */}
        <LinkBase target='/'>
          <Box width='70px'  >
            <Image
              source='/ODG-04.jpg'
              alternativeText='Home'
              isFullWidth={false}
              fitType='scale'
            />
          </Box>
        </LinkBase>
        <Spacing variant={PaddingSize.Wide2} />
        <Text variant='hTitle'>Fun Dogs </Text>
        <ResponsiveHidingView hiddenBelow={ScreenSize.Large} >
          <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} shouldAddGutters={true} paddingStart={PaddingSize.Wide2} paddingEnd={PaddingSize.Wide2}>
            <LinkBase target={'#learn'}>Learn</LinkBase>
            <Spacing variant={PaddingSize.Wide2} />
            <LinkBase target={'#rarity'}>Rarity</LinkBase>
            <Spacing variant={PaddingSize.Wide2} />
            <LinkBase target={'#faqs'}>FAQ</LinkBase>
            <Spacing variant={PaddingSize.Wide2} />
            <LinkBase target={'#roadmap'}>Roadmap</LinkBase>
            <LinkBase
              target='https://www.twitter.com'
              targetShouldOpenSameTab={false}>
              <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
            <LinkBase
              target='https://www.medium.com'
              targetShouldOpenSameTab={false}>
              <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
            <LinkBase
              target='https://www.discord.com'
              targetShouldOpenSameTab={false}>
              <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
          </Stack>
        </ResponsiveHidingView>
        <ResponsiveHidingView hiddenAbove={ScreenSize.Small}  >
          <IconButton icon={<KibaIcon iconId='ion-menu-outline' />} label='Open menu' onClicked={onMenuClicked} />
        </ResponsiveHidingView>
        <HidingView isHidden={!isMenuOpen}>
          <ResponsiveHidingView hiddenAbove={ScreenSize.Large}>
            <Stack direction={Direction.Vertical} isFullWidth={true} childAlignment={Alignment.Center} shouldAddGutters={true} paddingStart={PaddingSize.Wide2} paddingEnd={PaddingSize.Wide2}>
              <LinkBase
                target='https://www.twitter.com'
                targetShouldOpenSameTab={false}>
                <IconButton icon={<KibaIcon iconId='ion-logo-twitter' />}></IconButton></LinkBase>
              <LinkBase
                target='https://www.medium.com'
                targetShouldOpenSameTab={false}>
                <IconButton icon={<KibaIcon iconId='ion-logo-medium' />}></IconButton></LinkBase>
              <LinkBase
                target='https://www.discord.com'
                targetShouldOpenSameTab={false}>
                <IconButton icon={<KibaIcon iconId='ion-logo-discord' />}></IconButton></LinkBase>
              <Button text='Learn' target={'#learn'} />
              <Spacing variant={PaddingSize.Wide2} />
              <LinkBase target={'#rarity'}>Rarity</LinkBase>
              <Spacing variant={PaddingSize.Wide2} />
              <LinkBase target={'#faqs'}>FAQ</LinkBase>
              <Spacing variant={PaddingSize.Wide2} />
              <LinkBase target={'#roadmap'}>Roadmap</LinkBase>
            </Stack>
          </ResponsiveHidingView>
        </HidingView>
      </Stack>
    </Box>
  );
};

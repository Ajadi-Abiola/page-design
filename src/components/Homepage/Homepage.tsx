import React from 'react';

import { Alignment, Box, Grid, IconButton, KibaIcon, Button, Direction, EqualGrid, Image, LinkBase, PaddingSize, ResponsiveContainingView, Spacing, Stack, Text, TextAlignment, WebView} from '@kibalabs/ui-react';
import { useNavigator } from '@kibalabs/core-react';
import { Header } from '../header'
import { Section } from '../section';
import { SectionHolder } from '../sectionHolder';

export const HomePage = (): React.ReactElement => {
  const navigator = useNavigator();
  const kMarginSizeResponsiveBase = 11;
  const kMarginSizeResponsiveMedium = 9;

  return (
    <React.Fragment>
      <SectionHolder background={{ color: '#7790D9' }}>
        <Header />
        <Section background={{ color: '#4E4888' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Stack direction={Direction.Vertical} paddingBottom={PaddingSize.Wide2}>
            </Stack>
          </ResponsiveContainingView>
        </Section>
        <Section background={{ color: '#4E4888' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Grid shouldAddGutters={true} defaultGutter={PaddingSize.Wide} >
              <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}>

                <WebView url={'2RNM.gif'} permissions={['fullscreen', 'autoplay', 'encrypted-media']} aspectRatio={0.9925} />
              </Grid.Item>
            </Grid>
            <Spacing variant={PaddingSize.Wide2} />
            <Box width='260px' height='80px'>
              <Button variant='connectBtn' text='CONNECT' />
            </Box>
            <Spacing variant={PaddingSize.Wide1} />
          </ResponsiveContainingView>
        </Section>
        <Image
          source='sold.jpg'
          alternativeText='question'
          isFullWidth={false}
          fitType='scale'
        />
        <Stack direction={Direction.Vertical} isFullHeight={true} isFullWidth={true} >
          <Box variant='navBar2' height='150px' isFullHeight={true}  >
            <Grid shouldAddGutters={true} paddingTop={PaddingSize.Wide2} >
              <Grid.Item
                sizeResponsive={{ base: 6, medium: 4 }} >
                <Button variant='dogBtn' isFullWidth={true} text='MY DOGS' />
              </Grid.Item>
              <Grid.Item sizeResponsive={{ base: 6, medium: 4 }}>
                <Button variant='galleryBtn' isFullWidth={true} text='GALLERY' />
              </Grid.Item>
              <Grid.Item sizeResponsive={{ base: 6, medium: 4 }}>
                <Button variant='faqBtn' isFullWidth={true} text='FAQ' target={'#faqs'} />
              </Grid.Item>
            </Grid>
          </Box>
        </Stack>
        <Section id='learn' background={{ color: '#F0f0f0' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Grid shouldAddGutters={true} defaultGutter={PaddingSize.Wide} >
              <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}>
                <Stack direction={Direction.Vertical} childAlignment={Alignment.Start} paddingTop={PaddingSize.Wide3} paddingBottom={PaddingSize.Wide3}>
                  <Text variant='header3' >What Are fun Dogs</Text>
                  <Text variant='bodyText'>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
                </Stack>
              </Grid.Item>
              <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}></Grid.Item>
            </Grid>
          </ResponsiveContainingView>
        </Section>
        <Section background={{ color: 'white' }}>
          <Box variant='imageBanner' isFullHeight={true}  >
            <Image
              source='/dogpicture.jpg'
              alternativeText='dog'
              isFullWidth={true}
              fitType='scale'
            />
          </Box>
        </Section>
        <Section id='rarity' background={{ color: '#FFFFFF' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Image
              source='chart.jpg'
              alternativeText='question'
              isFullWidth={false}
              fitType='scale'
            />
          </ResponsiveContainingView>
        </Section>
        <Section background={{ color: 'white' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Stack direction={Direction.Horizontal} shouldAddGutters={true} paddingTop={PaddingSize.Wide3} paddingBottom={PaddingSize.Wide3}>
              <EqualGrid shouldAddGutters={true} defaultGutter={PaddingSize.Wide} childSizeResponsive={{ base: 12, medium: 6 }}>
                <Stack direction={Direction.Vertical} childAlignment={Alignment.Start}>
                  <Box height='100px'>
                    <Image
                      source='panda-gb1f621f54_1280.png'
                      alternativeText='question'
                      isFullWidth={false}
                      fitType='scale'
                    /></Box>
                  <Text variant='header3'> Why Get a Cool Dog?</Text>
                  <Text variant='bodyText'>Aside from participating in one the freaking coolest, curated but randomized NFT projects to date and getting a kick butt profile picture - you can help us evolve and build the future of Cool Cats. We’re giving back 20% of all ETH raised to the community (through contests, raffles, and more) - because we genuinely want Cool Cats to be a community driven and centric project. By getting a Cool Cat you have a voice in the community and can help guide the direction of the project. We’ll need help from you guys to determining specifics for future developments like breeding, next generation Cool Cats, the app, and much more!</Text>
                </Stack>
                <Stack direction={Direction.Vertical} childAlignment={Alignment.Start}>
                  <Button variant='priceBtn' text='Ξ 0.02' />
                  <Text variant='header3'> Alright, How much?</Text>
                  <Text variant='bodyText'>Cool Cats are priced at a flat rate (0.06 Ξ), and remember - Blue Cat Skin is exclusive to Gen 1!</Text>       </Stack>       </EqualGrid>
            </Stack>
          </ResponsiveContainingView>
        </Section>
        <Section background={{ color: '#FFE573' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Grid shouldAddGutters={true} defaultGutter={PaddingSize.Wide} >
              <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}>
                <Stack direction={Direction.Vertical} childAlignment={Alignment.Start} paddingTop={PaddingSize.Wide3} paddingBottom={PaddingSize.Wide3}>
                  <Text variant='header3' >Future of Cool Dogs?</Text>
                  <Text variant='bodyText'>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled dogs from over 300k total options. Cool dogs that have a variety of outfits, faces and colors - all dogs are cool, but completed outfit dogs are the coolest. Each Cool Dog is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
                </Stack>
              </Grid.Item>
              <Grid.Item sizeResponsive={{ base: 12, medium: 6 }}></Grid.Item>
            </Grid>
          </ResponsiveContainingView>
        </Section>
        <Section id='faqs' background={{ color: '#38E27D' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Stack childAlignment={Alignment.Start} paddingTop={PaddingSize.Wide3} paddingBottom={PaddingSize.Wide3}>
              <Text variant='faqTitle' alignment={TextAlignment.Center}>FAQs</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3' alignment={TextAlignment.Left}>What Are fun Dogs</Text>
              <Text variant='bodyText' alignment={TextAlignment.Left}>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> Where does my NFT go after I purchase a Cool Cat?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> This sounds awesome, how do I get involved?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> Soo…Breeding?!</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'>What can I do with my Cool Cat?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> Are Cool Cats a good investment?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> Who are you cats?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='header3'> Tokenomics?</Text>
              <Text variant='bodyText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
            </Stack>
          </ResponsiveContainingView>
        </Section>
        <Section id='roadmap' background={{ color: 'black' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <Stack childAlignment={Alignment.Start} paddingTop={PaddingSize.Wide3} paddingBottom={PaddingSize.Wide3}>
              <Text variant='faqTitle' alignment={TextAlignment.Center}>FAQs</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> What Are fun Dogs</Text>
              <Text variant='preFooterText'>Cool Dogs are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> Where does my NFT go after I purchase a Cool Cat?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> This sounds awesome, how do I get involved?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> Soo…Breeding?!</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'>What can I do with my Cool Cat?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> Are Cool Cats a good investment?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> Who are you cats?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
              <Text variant='preFooterHead'> Tokenomics?</Text>
              <Text variant='preFooterText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>
              <Spacing variant={PaddingSize.Wide2} />
            </Stack>
          </ResponsiveContainingView>
        </Section>
        <Section background={{ color: '#38E27D' }}>
          <ResponsiveContainingView sizeResponsive={{ base: kMarginSizeResponsiveBase, medium: kMarginSizeResponsiveMedium }}>
            <EqualGrid shouldAddGutters={true} defaultGutter={PaddingSize.Wide} childSizeResponsive={{ base: 12, medium: 4 }}>
              <Stack childAlignment={Alignment.Center} contentAlignment={Alignment.Center} shouldAddGutters={true}>
                <LinkBase target='/'>
                  <Box width='70px'  >
                    <Image
                      source='/ODG-04.jpg'
                      alternativeText='Home'
                      isFullWidth={false}
                      fitType='scale'
                    /></Box>
                </LinkBase>
                <Stack direction={Direction.Horizontal} childAlignment={Alignment.Center} contentAlignment={Alignment.Center} shouldAddGutters={true}>
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
                <Text variant='normal' alignment={TextAlignment.Left}>© 2021 FUN DOGS</Text>
              </Stack>
            </EqualGrid>
          </ResponsiveContainingView>
        </Section>
      </SectionHolder>
    </React.Fragment>
  );
};

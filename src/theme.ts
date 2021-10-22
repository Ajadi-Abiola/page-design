import { buildTheme, ITheme } from '@kibalabs/ui-react';

const defaultTheme = buildTheme();

export const buildCoolTheme = (): ITheme => {
  const theme = buildTheme({
    colors: {
      brandPrimary: '#6286C4',
      brandSecondary: '#D9D2E9',
      background: '#FFFFFF',
      text: '#FFFFFF'
    },
    fonts: {
      main: {
        url: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800,900&display=swap',
      },
    },
    boxes: {
      hBanner: {
        // padding: `${defaultTheme.dimensions.paddingWide} ${defaultTheme.dimensions.paddingWide}`,
        "background-color": '#4E4888',
        "border-radius": '0',
        'border-width': '100%',
        'padding-left': '15%',
        'padding-right': '15%'
      }
    },
    card: {
      padding: '0',
      'border-width': '0',
      margin: '0',
    },
    hTitle: {
      text: '#000000',
      'font-family': "'Post No Bills Jaffna', sans-serif",
      'font-weight': '400',
      padding: '10px'
    },
    vVideo: {
      width: '100&'
    },
    hGif: {
      'position': 'center',
      'padding-left': '25%',
      'padding-right': '25%'
    }
  });
  return theme
};
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
        'border-width':   '100%',
        'padding-left': '15 %',
        'padding-right': '15%'
      },
      card: {
        padding: '0',
        'background-color': 'rgba(255, 255, 255, 0.15)',
        'border-width': '0',
        // 'border-width': '1px',
        // 'border-color': 'rgba(255, 255, 255, 0.5)',
        // 'border-style': 'solid',
        margin: '0',},
      navBar1: {
        padding: '0',


        "border-radius": '0',
        'border-width':   '100%',
      },
      navBar2: {
  
        "background-color": '#FFFFFF',
        "border-radius": '0',
    margin:'0',
        'font-color': '#000000',
      
      },
      fBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left': '15%',
        'padding-right': '15%',
        'background-color': '#38E27D',
        'padding-bottom':'30px'
       


      },
      gBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left': '15%',
        'padding-right': '15%',
        'background-color': '#000000',
        'text':"white"
       


      },
      aboutBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left':'15%',
        'padding-right':'15%',
        'background-color':'#F0F0F0',
        'padding-bottom':'70px',
        'padding-top':'70px'
        


      },
      futureBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left':'15%',
        'padding-right':'15%',
        'background-color':'#FFE573',
        'padding-bottom':'70px',
        'padding-top':'70px'
        


      },
      imageBanner:{
      
        'padding-left':'15%',
        'padding-right':'15%',
        'padding-bottom':'50px'
       


      },
      midSection:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left':'15%',
        'padding-right':'15%',
        'padding-bottom':'30px'
       
       
        

      },
      preFooterBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left':'15%',
        'padding-right':'15%',
        'background-color': '#000000',
        'color':'#FFFFFF',
        'padding-bottom':'30px'},
        
        
      preFaqBanner: {
        'font-size': '40px',
        'font-weight': '600',
        'padding-left':'15%',
        'padding-right':'15%',
        'font-family': 'sans-serif',
        'font-style':'normal',
        'color':'white',
        'padding-top':'25px',
        'padding-bottom':'25px'
      },
      faqBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left':'15%',
        'padding-right':'15%'

      },
      footerBanner:{
        "border-radius": '0',
        'border-width':   '100%',
        'padding-left': '15%',
        'padding-right': '15%',
        'background-color': '#38E27D',
      },
      
    },
    texts: {
      default: {
        'font-family': "'Post No Bills Jaffna', sans-serif",
        'font-weight': '400',
      },
      bodyText: {
        'font-size': '18px',
        'font-weight': '600',
        'font-family': 'Roboto Mono',
        'font-style':'normal',
        'color':'black',
        'line-height':'20px'
      },
      preFooterText: {
        'font-size': '18px',
        'font-weight': '600',
        'font-family': 'Roboto Mono',
        'font-style':'normal',
        'color':'white',
        'line-height':'20px'
      }, 
      preFooterHead: {
        'font-size': '40px',
        'font-weight': '400',
      'padding-bottom':'10px',
      'padding-top':'20px',
        'font-family': 'poppins',
        'font-style':'normal',
        'color':'white',
        
      },
      


      header1: {
        'font-size': '40px',
        'font-weight': '600',
        'padding':'25px',
        'font-family': 'sans-serif',
        'font-style':'normal',
        'color':'black'
      },
      header3: {
        'font-size': '40px',
        'font-weight': '400',
      'padding-bottom':'10px',
      'padding-top':'20px',
        'font-family': 'poppins',
        'font-style':'normal',
        'color':'black'
      },
      navHeader: {
        'font-size': '40px',
        'font-weight': '600',
        'padding':'30px',
        'font-family': 'sans-serif',
        'font-style':'normal',
        'color':'white',
        'padding-left':'150px',
        'padding-right':'15px'
      },
      header5: {
        'font-size': '15px',
        'font-weight': '600',
        'padding':'25px',
        'font-family': 'sans-serif',
        'font-style':'normal',
        'color':'white'
      },
      subtitle: {
        'font-size': '0.75rem',
        'font-weight': '600',
      },
      small: {
        'font-size': '0.85rem',
      },
      light: {
        color: 'rgba(255, 255, 255, 0.75)',
      },
      footerText:{
        'width':'100%',
        'color':'#FFFFFF'
      }
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
    },
    
    buttons: {
      primary: {
        normal: {
          default: {
            background: {
              'background-color':'rgb(119, 144, 217)',
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
              "border-radius": '150px',
              'padding-left':'10%',
              'padding-right':'10%',
              'min-width':'auto',
              'transform-origin': 'center center',
              'font-family': 'sans-serif'
            

            },
            text: {
              color: '#000000',
              'font-size': '20px',
              'font-style':'bold',

            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',
           
            
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      secondary: {
        normal: {
          default: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
            },
            text: {
              color: '$colors.textOnBrand',
            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      tertiary: {
        normal: {
          default: {
            background: {
              'border-width': '0',
            },
            text: {
              color: '$colors.textOnBrand',
            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      priceBtn: {
        normal: {
          default: {
            background: {
              'background-color':'#FAD121',
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
              "border-radius": '20px',
              'padding-left':'10%',
              'padding-right':'10%',
              'padding-top':'30px',
            
              'min-width':'220px',
              'transform-origin': 'center center',
              'font-family': 'sans-serif'
            

            },
            text: {
              color: '#000000',
              'font-size': '53px',
              'font-style':'bold',

            },
          },
          hover: {
            background: {
              'background-color': '#FAD121',
           
            
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      dogBtn: {
        normal: {
          default: {
            background: {
              'background-color':'#7791D9',
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
              "border-radius": '150px',
              // 'padding-left':'10%',
              // 'padding-right':'10%',
              
              'min-width':'auto',
              'transform-origin': 'center center',
              'font-family': 'sans-serif'
            

            },
            text: {
              color: '#000000',
              'font-size': '20px',
              'font-style':'bold',

            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',

           
            
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      galleryBtn: {
        normal: {
          default: {
            background: {
              'background-color':'#FC9144',
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
              "border-radius": '150px',
              // 'padding-left':'10%',
              // 'padding-right':'10%',
              
              'min-width':'auto',
              'transform-origin': 'center center',
              'font-family': 'sans-serif'
            

            },
            text: {
              color: '#000000',
              'font-size': '20px',
              'font-style':'bold',

            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',

           
            
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
      faqBtn: {
        normal: {
          default: {
            background: {
              'background-color':'#38E27D',
              'border-color': 'rgba(255, 255, 255, 0.3)',
              'border-width': '1px',
              "border-radius": '150px',
              // 'padding-left':'10%',
              // 'padding-right':'10%',
              
              'min-width':'auto',
              'transform-origin': 'center center',
              'font-family': 'sans-serif'
            

            },
            text: {
              color: '#000000',
              'font-size': '20px',
              'font-style':'bold',

            },
          },
          hover: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.35)',

           
            
            },
          },
          press: {
            background: {
              'background-color': 'rgba(255, 255, 255, 0.55)',
            },
          },
          focus: {
            background: {
              'border-color': 'rgba(255, 255, 255, 0.75)',
            },
          },
        },
      },
    
    },
  
  });
  return theme
};
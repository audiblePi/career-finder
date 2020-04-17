// https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
import {createMuiTheme} from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/lightBlue';
import secondary from '@material-ui/core/colors/orange';
import background from '@material-ui/core/colors/lime';

//https://developers.google.com/fonts/docs/getting_started

let headFont = 'Montserrat';
let bodyFont = 'Comic Neue';
let scaleFactor = 1.25;
let articleScaleFactor = 2;
// Blue, Orange, Cyan
//let pColor = '#01579b';
//let sColor = '#ff3d00';
//let bColor = '#e0f7fa';
// Blue, Red, Blue
//let pColor = '#01579b';
//let sColor = '#d50000';
//let bColor = '#e1f5fe';
// Lime, Orange, Yellow
//let pColor = '#827717';
//let sColor = '#ff9100';
//let bColor = '#fffde7';
// Green, Orange, Yellow
//let pColor = '#1b5e20';
//let sColor = '#ff9100';
//let bColor = '#fffde7';
// Purple, Yellow, Yellow
//let pColor = '#4a148c';
//let sColor = '#ffea00';
//let bColor = '#fffde7';
// Supplied Colors -> Navy Blue, Neon Green
// on light blue...
let pColor = '#000080';
let sColor = '#39ff14';
let bColor = '#e1f5fe';
// Default Material-UI theme... apply global overrides here:
// https://material-ui.com/customization/default-theme/
// https://material-ui.com/customization/color/
export default createMuiTheme({
    palette: {
        primary: {
            main: pColor,
        },
        secondary: {
            main: sColor,
        },
        /*text: {
            primary: '#01579b',
            secondary: '#000',
            disabled: '#000'
        },*/
        background: {
       //     //default: '#FF00AC',
            default: bColor,
        }
    },
    typography: {
        // https://fonts.google.com/
        // https://material.io/design/typography/#
        // NOTE: These are the web defaults for Material-UI.
       h1: {fontFamily: headFont, fontSize: 99 * scaleFactor, color: pColor,},
       h2: {fontFamily: headFont, fontSize: 62 * scaleFactor, color: pColor,},
       h3: {fontFamily: headFont, fontSize: 49 * scaleFactor * 0.75, color: pColor,},
       h4: {fontFamily: headFont, fontSize: 35 * scaleFactor,},
       h5: {fontFamily: headFont, fontSize: 25 * scaleFactor,},
       h6: {fontFamily: headFont, fontSize: 21 * scaleFactor,},
       subtitle1: {fontFamily: bodyFont, fontSize: 16 * scaleFactor,},
       subtitle2: {fontFamily: bodyFont, fontSize: 14 * scaleFactor,},
       body1: {fontFamily: bodyFont, fontSize: 16 * scaleFactor,},
       body2: {fontFamily: bodyFont, fontSize: 14 * articleScaleFactor,},
       button: {fontFamily: bodyFont, fontSize: 14 * scaleFactor,},
       caption: {fontFamily: bodyFont, fontSize: 12 * scaleFactor,},
       overline: {fontFamily: bodyFont, fontSize: 10 * scaleFactor,},       
      },
});
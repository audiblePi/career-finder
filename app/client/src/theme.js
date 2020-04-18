// https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
import {createMuiTheme} from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/deepPurple';
import secondary from '@material-ui/core/colors/teal';
//import background from '@material-ui/core/colors/orange';

//https://developers.google.com/fonts/docs/getting_started

let headFont = 'Quando';
let bodyFont = 'Montserrat';
let scaleFactor = 1.5;
// Default Material-UI theme... apply global overrides here:
// https://material-ui.com/customization/default-theme/
export default createMuiTheme({
    palette: {
        primary: primary,
        secondary: secondary,
        /*text: {
            primary: '#fff',
            secondary: '#fff',
            disabled: '#fff'
        },*/
        background: {
            //default: '#FF00AC',
            default: '#D3FF61',
        }
    },
    typography: {
        // https://fonts.google.com/
        // https://material.io/design/typography/#
        // NOTE: These are the web defaults for Material-UI.
       h1: {fontFamily: headFont, fontSize: 99 * scaleFactor,},
       h2: {fontFamily: headFont, fontSize: 62 * scaleFactor,},
       h3: {fontFamily: headFont, fontSize: 49 * scaleFactor,},
       h4: {fontFamily: headFont, fontSize: 35 * scaleFactor,},
       h5: {fontFamily: headFont, fontSize: 25 * scaleFactor,},
       h6: {fontFamily: headFont, fontSize: 21 * scaleFactor,},
       subtitle1: {fontFamily: bodyFont, fontSize: 16 * scaleFactor,},
       subtitle2: {fontFamily: bodyFont, fontSize: 14 * scaleFactor,},
       body1: {fontFamily: bodyFont, fontSize: 16 * scaleFactor,},
       body2: {fontFamily: bodyFont, fontSize: 14 * scaleFactor,},
       button: {fontFamily: bodyFont, fontSize: 14 * scaleFactor,},
       caption: {fontFamily: bodyFont, fontSize: 12 * scaleFactor,},
       overline: {fontFamily: bodyFont, fontSize: 10 * scaleFactor,},       

      },
});
/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
 import { createMuiTheme } from "@material-ui/core";
 // import { purple, green, orange, deepOrange } from "@material-ui/core/colors";
 import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});
 
 // Global styles can be moved to a separate file for ease of maintenance.
 const global = {
   textRight: {
     textAlign: "right",
   },
   mygrey: "rgba(0, 0, 0, 0.5)",
 };

 
 export const dark = () => (createTheme({
   palette: {
     type: 'dark',
     primary: {
       main: "#040f3d",
     },
     secondary: {
       main: "#757575",
     },
   },
   typography: {
     button: {
       // textTransform: "none",   //Using this will stop tranforming all button texts to UPPERCASE
     },
   }//,
   //common styles.
 //   global
 }))
 
 export const light = ()=> (createTheme({
   palette: {
     type: 'light',
     primary: {
       main: "#e75480",
     },
     secondary: {
       main: "#040f3d",
     },
   }//,
   //common styles.
 //   global
 }))

 export const appbar = ()=> (createTheme({
  palette: {
    type: 'light',
    primary: {
      main: "#fff",
    },
  }
 }))
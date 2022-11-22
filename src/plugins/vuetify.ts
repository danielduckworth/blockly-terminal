/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import colors from 'vuetify/lib/util/colors'
// import "@/assets/styles.scss";
// import { md3 } from 'vuetify/blueprints'

// Composables
import { createVuetify, ThemeDefinition } from "vuetify";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {

    primary: '#4459A9',
    'primary-darken-1': '#2A4190',
    'primary-darken-2': '#0D2878',
    'primary-darken-3': '#001452',
    'primary-lighten-1': '#5D72C4',
    'primary-lighten-2': '#778CE0',
    'primary-lighten-3': '#92A7FD',
    'primary-lighten-4': '#B7C4FF',
    'primary-container': '#DCE1FF',
    'on-primary-container': '#001552',
    'on-primary': '#FFFFFF',
    secondary: '#5A5D72',
    'secondary-darken-1': '#424659',
    'secondary-darken-2': '#2B3042',
    'secondary-darken-3': '#171B2C',
    'secondary-lighten-1': '#72768B',
    'secondary-lighten-2': '#8C90A6',
    'secondary-lighten-3': '#A7AAC1',
    'secondary-lighten-4': '#C2C5DD',
    'secondary-container': '#DEE1F9',
    'on-secondary-container': '#171B2C',
    tertiary: '#75546F',
    'tertiary-container': '#FFD7F5',
    'on-tertiary-container': '#2C1229',
    background: '#FEFBFF',
    'on-background': '#1B1B1E',
    surface: '#FEFBFF',
    'surface-variant': '#E3E1E9',
    'on-surface-variant': '#46464C',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    'error-container': '#FFDAD6',
    'on-error-container': '#410002',
    info: '#275EA7',
    success: '#008770',
    warning: '#FF897D',
    'terminal-text': '#006B59',
    'terminal-prompt': '#275EA7',
    'terminal-background': '#282a38',
    'terminal-bling': '#85468E',



  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: false,
  // blueprint: md3,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
});

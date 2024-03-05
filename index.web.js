import {AppRegistry} from 'react-native';
import name from './app.json';
import App from './App';

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

// Use the prebuilt version of RNVI located in the dist folder

// Generate the required CSS
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

import iconFontEvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import iconFontEntypo from 'react-native-vector-icons/Fonts/Entypo.ttf';

import iconFontAntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';

import iconFontIonicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';

import iconFontMaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }
  @font-face {
    src: url(${iconFontEvilIcons});
    font-family: EvilIcons;
  }
  @font-face {
    src: url(${iconFontEntypo});
    font-family: Entypo;
  }
  @font-face {
    src: url(${iconFontAntDesign});
    font-family: AntDesign;
  }
  @font-face {
    src: url(${iconFontIonicons});
    font-family: Ionicons;
  }
  @font-face {
    src: url(${iconFontMaterialIcons});
    font-family: MaterialIcons;
  }
  `;

// Create a stylesheet
const style = document.createElement('style');
style.type = 'text/css';

// Append the iconFontStyles to the stylesheet
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject the stylesheet into the document head
document.head.appendChild(style);

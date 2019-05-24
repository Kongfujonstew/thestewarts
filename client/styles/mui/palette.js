import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/bluegrey';
import brown from '@material-ui/core/colors/brown';
import red from '@material-ui/core/colors/red';

export default {
  primary: {
    ...grey,
    main: '#726442', //matches gradient on AppMenu
    dark: grey[800],
    contrastText: '#fff'
  },
  secondary: blue,
  accent: red,
  background: {
    default: '#f9f9f9'
  }
  // type: 'light'
}

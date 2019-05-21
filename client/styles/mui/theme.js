import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import overrides from './overrides';

export default createMuiTheme({
  overrides,
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

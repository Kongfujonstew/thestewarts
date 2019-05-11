import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

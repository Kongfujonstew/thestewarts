import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography';
import palette from './palette';
import overrides from './overrides';

export default createMuiTheme({
  typography,
  ...overrides,
  palette
});

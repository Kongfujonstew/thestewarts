import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import theme from '../../styles/mui/theme';

class MUIBundleWrapper extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      // TODO Refactor
      // This line breaks the css when files are gzipped
      // jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <JssProvider generateClassName={createGenerateClassName()}>
        <MuiThemeProvider theme={theme}>
          { this.props.children }
        </MuiThemeProvider>
      </JssProvider>
    );
  }
};

export default MUIBundleWrapper;

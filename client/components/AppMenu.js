import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { logout } from '../auth';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  svgIcon: {
    color: 'white',
    fontSize: '32px'
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleLogout = () => {
    logout();
  }

  // handleClick only closes drawer at xs width
  renderDrawerItems = handleClick => (
    <div>
      <div className={this.props.classes.toolbar + ' background-color'}>
        <Hidden smUp implementation="css">
          <IconButton onClick={this.handleDrawerToggle}>
            <ArrowBackIcon className={this.props.classes.svgIcon} />
          </IconButton>
        </Hidden>
      </div>
      <Divider />
      <List>
        {this.props.pages.map((page, index) => (
          <Link key={page.text} to={page.path}>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>{<page.Icon />}</ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{ flex: 1 }} variant="h6" color="inherit" noWrap>
              Title
            </Typography>
            <Button color="secondary" onClick={this.handleLogout}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
            >
              {this.renderDrawerItems(() => this.handleDrawerToggle())}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              {this.renderDrawerItems(() => {})}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

// ResponsiveDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   // Injected by the documentation to work in an iframe.
//   // You won't need it on your project.
//   container: PropTypes.object,
//   theme: PropTypes.object.isRequired,
// };

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

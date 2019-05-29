import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  menuButton: {
    marginRight: 20,
    // [theme.breakpoints.up('sm')]: {
    //   display: 'none',
    // },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  gradient: {
    background: 'linear-gradient(135deg, #726442, #564e3b)'
  },
  toolbarStyles: {
    display: 'flex',
    backgroundColor: 'black',
    width: '100vw'
  },
  makeMeGrow: {
    flex: 1
  },
  svgIcon: {
    color: 'white',
    fontSize: '32px',
    marginLeft: '10px'
  },
  video: {
    position: 'absolute',
    zIndex: 2000,
    top: '60px',
    // filter: 'invert(1)',
    width: 'calc(100% - 1px)',
    width: '100%',
    maxWidth: '275px',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    wideOpen: false
  };

  componentDidMount = () => {
    document.body.onresize = () => {
      const width = document.body.clientWidth;
      if (this.state.wideOpen && width < 600) {
        this.setState({ wideOpen: false });
      } else if (this.state.mobileOpen && width >= 600) {
        this.setState({ mobileOpen: false });
      }
    };
  }

  componentWillUnMount = () => {
    document.body.onresize = null;
  }

  handleMobileToggle = () => {
    console.log('click hDT')
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleWideToggle = () => {
    this.setState({ wideOpen: !this.state.wideOpen });
  };

  handleLogout = () => {
    logout();
  }

  renderMenuButton = onClick => (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={onClick}
      className={this.props.classes.menuButton}
    >
      <MenuIcon className={this.props.classes.svgIcon}/>
    </IconButton>
  )

  // handleClick only closes drawer at xs width
  renderDrawerItems = onClick => (
    <div style={{ position: 'relative' }}>
      <div className={this.props.classes.toolbar + ' ' + this.props.classes.toolbarStyles}>
        <Hidden smUp implementation="css">
          <IconButton style={{ marginRight: '-64px' }} onClick={this.handleMobileToggle}>
            <ArrowBackIcon className={this.props.classes.svgIcon} />
          </IconButton>
        </Hidden>
        <Typography variant="h5" style={{margin: 'auto', color: 'white' }} gutterBottom>The Stewarts</Typography>
      </div>
      <video loop autoPlay muted className={ this.props.classes.video }  src="/public/videos/earth.mp4" />
      <List style={{ paddingTop: '160px' }} >
        {this.props.pages.map((page, index) => (
          <Link key={page.name} to={page.path}>
            <ListItem button onClick={onClick}>
              <ListItemIcon style={{ color: 'white', margin: '0 4px 0 4px' }}>{<page.icon />}</ListItemIcon>
              <ListItemText style={{ color: 'white', margin: '0 4px 0 4px' }} primary={page.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  render() {
    const { classes, theme } = this.props;
    const dontShowAppMenu = this.props.pages.some(page => !page.name);

    if (dontShowAppMenu) {
      return this.props.children;
    };

    return (
      <div id="menu" className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.wideOpen
          })}
          style={this.state.wideOpen ? {} : { width: '100%', marginLeft: 0 }}
        >
          <Toolbar className={classes.gradient}>
            <Hidden smUp implementation="css">
              {this.renderMenuButton(this.handleMobileToggle)}
            </Hidden>
            <Hidden xsDown implementation="css">
              {!this.state.wideOpen && this.renderMenuButton(this.handleWideToggle)}
            </Hidden>

            <Typography className={classes.makeMeGrow} variant="h6" color="inherit" noWrap>
              {this.props.title}
            </Typography>
            <Button style={{ color: 'white' }} onClick={this.handleLogout}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
          <nav style={{ width: this.state.wideOpen ? '240px' : 0 }} className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleMobileToggle}
                style={{ position: 'relative' }}
                classes={{ paper: classes.drawerPaperSM }}
              >
                {this.renderDrawerItems(() => this.handleMobileToggle())}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              {this.state.wideOpen ? <Drawer
                  className={classes.drawer}
                  classes={{ paper: classes.drawerPaper }}
                  variant="persistent"
                  open={this.state.wideOpen}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleWideToggle}>
                      {theme.direction === 'ltr' ? <ArrowBackIcon /> : <ArrowBackIcon />}
                    </IconButton>
                  </div>
                  {this.renderDrawerItems(() => {})}
                </Drawer> :
                null
              }
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

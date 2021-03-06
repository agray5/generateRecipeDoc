import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { LinkRoute } from "components/LinkRoute";
import { DASHBOARD, LOGIN, RECIPE, AUTH_PAGE1, ROOT } from "navigation/CONSTANTS";
import { useAuth } from "../Auth/ProvideAuth";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Item({ Icon, text, onClick, to, linkProps, children }) {
  return (
    <LinkRoute to={to} {...linkProps} >
      <ItemInner Icon={Icon} text={text} onClick={onClick} children={children}/>
    </LinkRoute>
  )
}

function ItemInner({ Icon, text, onClick, children }) {
  return (
    <ListItem button key={text} onClick={onClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

function ResponsiveDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles();
  const theme = useTheme();
  const auth = useAuth();

  const drawer = (
    <div>
      <List>
        <Item text="Dashboard" to={ROOT} > <DashboardIcon /> </Item>
        <Item text="Recipe Creator" to={RECIPE}><EmojiFoodBeverageIcon /></Item>
      </List>
      <Divider />
      <List>
        {auth.user ?
          <ItemInner text="Sign Out" onClick={auth.signOut}>  <DashboardIcon /> </ItemInner> :
          <Item text="Sign In" to={LOGIN}> <DashboardIcon /> </Item>
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
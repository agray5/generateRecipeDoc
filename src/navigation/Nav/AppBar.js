import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Toolbar, AppBar, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from './LoginIcon';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

function TopBar(props) {
  const { handleDrawerToggle } = props;
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
          {/* Right Aligned */}
          <Box marginLeft={"auto"}>
            <LoginIcon />
          </Box>
        </Toolbar>
      </AppBar>
  );
}

TopBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  handleDrawerToggle: PropTypes.func
};

export default TopBar;
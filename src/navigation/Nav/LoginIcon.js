import React from 'react';
import PropTypes from 'prop-types';
import { Box , Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "navigation/Auth/ProvideAuth";
import { LinkRoute } from "components/LinkRoute";
import { DASHBOARD, LOGIN, RECIPE, AUTH_PAGE1, ROOT } from "navigation/CONSTANTS";

const useStyles = makeStyles((theme) => ({
}));

function LoginIcon(props) {
  const { handleDrawerToggle } = props;
  const classes = useStyles();
  const auth = useAuth();

  return (
    <Box>
      {
        auth.user ? (
          <Avatar></Avatar>
        ) :
        (
          <LinkRoute to={LOGIN}>Login/Register</LinkRoute>
        )
      }
    </Box>
  );
}

LoginIcon.propTypes = {
};

export default LoginIcon;
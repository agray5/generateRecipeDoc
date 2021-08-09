import React from 'react';
import {
  Avatar,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { LinkRoute } from "components/LinkRoute";
import LoadingButton from "components/LoadingButton";
import { LOGIN } from 'navigation/CONSTANTS';
import { green } from '@material-ui/core/colors';
import utils  from '../../utils'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: green[500],
    fontSize: 60
  }
}));

export default function ResetPassword({
  email
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <CheckCircleOutlineOutlinedIcon className={classes.icon} />
        <Typography component="h1" variant="h5">
          Password Reset Email Sent
        </Typography>
        <Typography component="h6" align="center" >
          An email has been sent to your email address <strong>{utils.obscureEmail(email)}</strong>. Follow the directions to reset your password. 
        </Typography>
        </div>
    </Container>
  );
}
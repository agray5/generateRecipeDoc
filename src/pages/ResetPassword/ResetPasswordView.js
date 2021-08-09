import React from 'react';
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LinkRoute } from "components/LinkRoute";
import LoadingButton from "components/LoadingButton";
import { LOGIN } from 'navigation/CONSTANTS';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ResetPassword({
  isLoading,
  error,
  email,
  setEmail,
  handlePasswordReset
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Typography component="h6">
          Enter your email and a password reset email will be sent.
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl className={classes.error} error>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            isLoading={isLoading}
            onClick={handlePasswordReset}
          >
            Send
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <LinkRoute to={LOGIN}>
                Back to Login
              </LinkRoute>
            </Grid>
            <Grid item>
              <LinkRoute to={LOGIN}>
                {"Don't have an account? Sign Up"}
              </LinkRoute>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
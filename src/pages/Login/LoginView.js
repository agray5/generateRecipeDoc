import React from 'react';
import { 
  Avatar, 
  FormControlLabel, 
  TextField, 
  Checkbox, 
  Grid, 
  Typography, 
  Container,  
  FormControl,
  FormHelperText
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { LinkRoute } from "components/LinkRoute";
import LoadingButton from "components/LoadingButton";
import { ROOT, DASHBOARD, RECIPE, LOGIN, RESET_PASSWORD, SIGNUP } from "navigation/CONSTANTS";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    display: "flex",
    "& > *": {
      textAlign: "center"
    }
  }
}));

export default function Login({
  isLoading, 
  handleLogin, 
  error, 
  email, 
  password, 
  remember, 
  setRemember,
  setEmail, 
  setPassword
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <FormControlLabel
            control={
              <Checkbox value="remember" checked={remember} onChange={e => setRemember(e.target.checked)} color="primary" />
            }
            label="Remember me"
          />
          <LoadingButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            isLoading={isLoading}
            onClick={handleLogin}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <LinkRoute to={RESET_PASSWORD}>
                Forgot password
              </LinkRoute>
            </Grid>
            <Grid item>
              <LinkRoute to={SIGNUP}>
                {"Don't have an account? Sign Up"}
              </LinkRoute>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
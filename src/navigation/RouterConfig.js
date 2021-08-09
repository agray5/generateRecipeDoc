import React from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import RecipeForm from "pages/RecipeForm";
import ResetPassword from "pages/ResetPassword";
import SignUp from "pages/SignUp";
import { NotFound } from "navigation/NotFound";
import Nav from "navigation/Nav";
import { ROOT, DASHBOARD, RECIPE, LOGIN, RESET_PASSWORD, SIGNUP } from "navigation/CONSTANTS";
import Login from "pages/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    margin: 'auto'
  }
}));

export const RouterConfig = () => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Nav />
      <div className={classes.main}>
        <div className={classes.toolbar} />
        <Switch>
          {/* List all public routes here */}
          <Route exact path={[ROOT, "/generateRecipeDoc"]} component={Home} />
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={RECIPE} component={RecipeForm} />
          <Route path={LOGIN} component={Login} />
          <Route path={RESET_PASSWORD} component={ResetPassword} />
          <Route path={SIGNUP} component={SignUp} />

          {/* List all private/auth routes here */}
          {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
          {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

          {/* List a generic 404-Not Found route here */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Box>
  );
};

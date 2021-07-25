import React from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import RecipeForm from "pages/RecipeForm"
import { NotFound } from "navigation/NotFound";
import ResponsiveDrawer from "components/Drawer";
import { ROOT, DASHBOARD, RECIPE, AUTH_PAGE1 } from "navigation/CONSTANTS";
import Login from "./Auth/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <Box display="flex">
      <ResponsiveDrawer />
      <Switch>
        {/* List all public routes here */}
        <Route exact path={[ROOT,"/generateRecipeDoc"]} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={RECIPE} component={RecipeForm} />
        <Route path="/login">
          <Login />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Box>
  );
};

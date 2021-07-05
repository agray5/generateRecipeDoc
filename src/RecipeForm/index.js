import React from "react"
import { Grid, Card } from '@material-ui/core';
import Form from "./Form"
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    width: "100%"
  }
});


class RecipeForm extends React.Component {


  render() {
    const { classes, ...rest } = this.props;
    return(
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.card}>
        <Form {...rest}/>
      </Card>
    </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
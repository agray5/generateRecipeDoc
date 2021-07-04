import React from "react"
import { Grid, Card } from '@material-ui/core';
import Form from "./Form"
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  card: {
    marginTop: "4rem",
  }
});


class RecipeForm extends React.Component {


  render() {
    const { classes } = this.props;
    return(
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.card}>
        <Form />
      </Card>
    </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
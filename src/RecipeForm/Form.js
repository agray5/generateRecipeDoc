import React from "react"
import { FormControl, InputLabel, Input, TextField, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: "4rem",
  }
});

class RecipeForm extends React.Component {


  render() {
    const { classes, handleChange } = this.props;

    return (
      <form className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={4}
        >
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="recipe-title">Recipe Title</InputLabel>
              <Input id="recipe-title" onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="recipe-type">Recipe Type</InputLabel>
              <Input id="recipe-type" onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="recipe-desc"
              label="Recipe Description"
              rows={4}
              multiline
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
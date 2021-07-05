import React from "react"
import { FormControl, InputLabel, Input, TextField, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ImageInput from "../Components/ImageInput"

const styles = theme => ({
  root: {
    padding: "4rem",
  }
});

class RecipeForm extends React.Component {


  render() {
    const { classes, handleChange, handleImg, values } = this.props;

    return (
      <form className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={4}
        >
          <Grid item xs={4} >
            <ImageInput resolve={handleImg} />
          </Grid>
          <Grid
            container
            item
            direction="column"
            justify="center"
            spacing={3}
            xs={8} 
          >
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="title">Recipe Title</InputLabel>
                <Input id="title" onChange={handleChange} value={values["title"]} />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="type">Recipe Type</InputLabel>
                <Input id="type" onChange={handleChange} value={values["type"]} />
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                id="desc"
                label="Recipe Description"
                rows={4}
                multiline
                onChange={handleChange}
                variant="outlined"
                value={values["desc"]}
              />
            </Grid>
            <Grid item>
              <TextField
                id="ing"
                label="Recipe Ingrediants"
                rows={4}
                multiline
                onChange={handleChange}
                variant="outlined"
                value={values["ing"]}
              />
            </Grid>
            <Grid item>
              <TextField
                id="instructions"
                label="Recipe instructions"
                rows={4}
                multiline
                onChange={handleChange}
                variant="outlined"
                value={values["instructions"]}
                helperText="Put each step on a new line."
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
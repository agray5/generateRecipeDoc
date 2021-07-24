import React from "react"
import { FormControl, InputLabel, Input, TextField, Grid, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { ImageInput } from "../components/index"

const styles = theme => ({
  root: {
    padding: "4rem",
  }
});

class RecipeForm extends React.Component {


  render() {
    const { classes, handleChange, handleImg, handleSubmit, values } = this.props;

    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          spacing={5}
        >
          <Grid item xs={12} lg={4} >
            <ImageInput resolve={handleImg} />
            <p>Can't generate doc without image</p>
          </Grid>
          <Grid
            container
            item
            direction="column"
            justify="center"
            spacing={3}
            lg={8}
            xs={12} 
          >
            <Grid item>
              <FormControl fullWidth>
                <InputLabel htmlFor="title">Recipe Title</InputLabel>
                <Input id="title" onChange={handleChange} value={values["title"]}  fullWidth/>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel htmlFor="type">Recipe Type</InputLabel>
                <Input id="type" onChange={handleChange} value={values["type"]} fullWidth/>
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
                fullWidth
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
                fullWidth
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
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Button type="submit" value="Submit" color="primary" variant="contained">Generate recipe doc</Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
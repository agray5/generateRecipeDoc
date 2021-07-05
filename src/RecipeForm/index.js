import React from "react"
import { Grid, Card } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import createReport from 'docx-templates';
import Form from "./Form"
import utils from "../utils/index"

const styles = theme => ({
  card: {
    width: "100%"
  }
});


class RecipeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { values: { title: "", type: "", ing: "", instructions: "", desc: "" } };
    this.setDefaultImg();
  }

  handleChange(event) {
    this.setState({ values: { ...this.state.values, [event.target.id]: event.target.value } })
  }

  async setDefaultImg() {
    const defaultImg = await fetch(process.env.PUBLIC_URL + "/default.png");
    this.handleImg([defaultImg])
  }

  async handleImg(files) {
    const data = await files[0].arrayBuffer();
    const { width, height } = await utils.getHeightAndWidthFromDataUrl(files[0].previewUrl);
    this.setState({ values: { ...this.state.values, img: { data: data, extension: "." + files[0].name.split('.').pop(), width: width * 0.026458, height: height * 0.026458 } } })
  }

  handleSubmit(event) {
    event.preventDefault();
    generateDocument(this.state.values);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.card}>
          <Form
            values={this.state.values}
            handleChange={this.handleChange.bind(this)}
            handleImg={this.handleImg.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
        </Card>
      </Grid>
    );
  }
}

async function generateDocument(docValues) {
  const file = await fetch(process.env.PUBLIC_URL + "/temp.docx");
  const data = await file.arrayBuffer();
  onTemplateChosen(data, docValues);
}

// Create downloadable docx
const onTemplateChosen = async (text, data) => {
  const template = text;
  const report = await createReport({
    template,
    data: {
      ...parseData(data)
    },
    additionalJsContext: {
      img: (options) => {
        const { maxWidth } = options;
        let img = data.img;
        if (maxWidth && img && img.width > maxWidth) {
          img =  {...data.img, ...resize({...data.img, maxWidth})}
        }
        return img
      }
    },
    cmdDelimiter: ['{{', '}}'],
  });
  const saveable = new Blob([report], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  saveAs(saveable, "report.docx")
};

// Process recipe data from form
const parseData = (data) => {
  const output = Object.assign({}, data);

  // Turn steps into an array
  if (output.instructions) {
    output.instructions = output.instructions.split(/\r?\n/).map(text => ({ text: text }));
  }
  else output.instructions = [""];

  return output;
}

const resize = (data) => {
  const { width, height, maxWidth } = data;

  // calc
  let widthRatio = maxWidth / width;

  // output
  return ({ width: width * widthRatio, height: height *  widthRatio})
}

export default withStyles(styles, { withTheme: true })(RecipeForm);
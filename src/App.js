import { Component } from "react";
import './App.css';
import { Container } from '@material-ui/core';
import { saveAs } from "file-saver";
import createReport from 'docx-templates';
import RecipeForm from "./RecipeForm/index"

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { values: { title: "", type: "starter", ing: "Hot Dog", instructions: "Boil\nCook", desc: "This is a description" } };

    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ values: { ...this.state.values, [event.target.id]: event.target.value } })
  }

  async handleImg(files) {
    const data = await files[0].arrayBuffer();
    const {width, height} = await getHeightAndWidthFromDataUrl(files[0].previewUrl);
    this.setState({ values: { ...this.state.values, img: {data: data, extension: "."+files[0].name.split('.').pop(), width: width * 0.026458, height: height * 0.026458} }})
  }

  render() {
    return (
      <Container>
        <RecipeForm
          values={this.state.values}
          handleChange={this.handleChange.bind(this)}
          handleImg={this.handleImg.bind(this)} />
        <p>
          <button onClick={generateDocument.bind(this, this.state.values)}>Generate CV with docx!</button>
        </p>
      </Container>
    );
  }
}

async function generateDocument(docValues) {
  const file = await fetch(process.env.PUBLIC_URL + "/temp.docx");
  const data = await file.arrayBuffer();
  onTemplateChosen(data, docValues);
}

function readFileAsString(file) {
  if (!file) {
    console.log('No file is selected');
    return;
  }

  var reader = new FileReader();
  reader.onload = function (event) {
    onTemplateChosen(event.target.result);
  };
  reader.readAsArrayBuffer(file);
}

// Create downloadable docx
const onTemplateChosen = async (text, data) => {
  const template = text;
  console.log("Data", parseData(data))
  const report = await createReport({
    template,
    data: {
      name: 'John', surname: 'Appleseed', title: 'PIE', qrCode: url => {
        const dataUrl = "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
        const data = dataUrl.slice('data:image/gif;base64,'.length);
        return { width: 6, height: 6, data, extension: '.gif' };
      },
      ...parseData(data)
    },
    cmdDelimiter: ['{', '}'],
    additionalJsContext: {
      qrCode: url => {
        const dataUrl = "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
        const data = dataUrl.slice('data:image/gif;base64,'.length);
        return { width: 6, height: 6, data, extension: '.gif' };
      },
    }
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

  return output;
}

const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
  const img = new Image()
  img.onload = () => {
    resolve({
      height: img.height,
      width: img.width
    })
  }
  img.src = dataURL
})

export default App;

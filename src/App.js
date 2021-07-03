import { Component } from "react"
import logo from './logo.svg';
import './App.css';
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { experiences, education, skills, achievements } from "./data";
import { DocumentCreator } from "./generator";
import createReport from 'docx-templates';

class App extends Component{

  
  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
          <button onClick={this.generateDocument}>Generate CV with docx!</button>
          <input type="file" id="input" onChange={readFileAsString}></input>
        </p>
      </div>
    );
  }
}


function readFileAsString(e) {
    var files = e.target.files;
    if (files.length === 0) {
        console.log('No file is selected');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
      onTemplateChosen(event.target.result);
    };
    reader.readAsArrayBuffer(files[0]);
}

const onTemplateChosen = async (text) => {
  const template = text;
  const report = await createReport({
    template,
    data: { name: 'John', surname: 'Appleseed', title: 'PIE' },
    cmdDelimiter: ['{', '}']
  });
 const saveable =  new Blob([report], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
  saveAs(saveable, "report.docx")
};


export default App;

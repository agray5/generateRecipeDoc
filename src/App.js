import { Component } from "react";
import './App.css';
import { Container } from '@material-ui/core';
import RecipeForm from "./RecipeForm/index"

class App extends Component {
  render() {
    return (
      <Container>
        <RecipeForm/>
      </Container>
    );
  }
}

export default App;

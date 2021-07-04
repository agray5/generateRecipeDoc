import React from "react"

class DynamicInputList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { steps };
  }

  createInputs(values, handleChange){
    return values.map((el, i) => 
        <div key={i}>
         <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
         <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
        </div>          
    )
 }

  render() {
    const {handleChange, values} = this.props;
    return (
      {createInputs(values)}
    );
  }
}

export default DynamicInputList;
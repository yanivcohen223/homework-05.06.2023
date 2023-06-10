import React, { Component } from 'react';

class StudentFilterByClass extends Component {
  state = {
    class_filter: 0
  }
  handleChange = (e) => {
    console.log(e.target.name);

    this.setState({
        class_filter: e.target.value
    })

    // filter students by their classroom
    this.props.student_filter_classroom(e.target.value)
  }
  render() {
    return (
      <div>
        <h2>filter students by classroom</h2>
           <p>Filter class: <input name="classroom_number" type="number" onChange={this.handleChange} 
              value={this.state.class_filter} placeholder="class number" /></p>   
      <hr />           
      </div>
    );
  }
}

export default StudentFilterByClass;
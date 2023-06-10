import React, { Component } from 'react';

class StudentFilter extends Component {
  state = {
    year_filter: 0
  }
  handleChange = (e) => {
    console.log(e.target.name);

    this.setState({
        year_filter: e.target.value
    })

    // filter students by their birth year
    this.props.student_filter(e.target.value)
  }
  render() {
    return (
      <div>
      <hr />
        <h2>filter students by year (bigger equal than)</h2>
           <p>Filter: <input name="year" type="number" onChange={this.handleChange} 
              value={this.state.year_filter} placeholder="year" /></p>   
      <hr />           
      </div>
    );
  }
}

export default StudentFilter;
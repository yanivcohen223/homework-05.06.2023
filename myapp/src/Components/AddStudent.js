
import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    student_from_input: {
        id: "",
        personal_id: "",
        first_name: "",
        last_name: "",
        email: "",
        birth_year: "",
        classroom_number: ""
    }
  }
  handleChange = (e) => {
    console.log(e.target.name);

    this.setState({
        student_from_input: {
        ...this.state.student_from_input,
        [e.target.name]: e.target.value
      }
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', JSON.stringify(this.state.student_from_input));
    
        this.props.add_student(this.state.student_from_input)
        this.setState({
            student_from_input : {
                id: "",
                personal_id: "",
                first_name: "",
                last_name: "",
                email: "",
                birth_year: "",
                classroom_number: ""
        }})
    
        this.setState({
            student_from_input: {
            ...this.state.student_from_input,
            [e.target.name]: ""
          }
        })
      }



  
  render() {
    return (
      <div>
        <h2>add new student</h2>
        <form onSubmit={this.handleSubmit}>

            <p>Personal ID: <input name="personal_id" type="text" onChange={this.handleChange} 
                value={this.state.student_from_input.personal_id} placeholder="student personal id" required/></p>

            <p>First Name: <input name="first_name" type="text" onChange={this.handleChange} 
                value={this.state.student_from_input.first_name} placeholder="student first name" required/></p>

            <p>Last Name: <input name="last_name" type="text" onChange={this.handleChange} 
              value={this.state.student_from_input.last_name} placeholder="student last name" required/></p>

            <p>Email: <input name="email" type="text" onChange={this.handleChange} 
              value={this.state.student_from_input.email} placeholder="student email" required/></p>

            <p>Birth-Year: <input name="birth_year" type="text" onChange={this.handleChange} 
              value={this.state.student_from_input.birth_year} placeholder="student birth year" required/></p>

            <p>Classroom Number: <input name="classroom_number" type="text" onChange={this.handleChange} 
              value={this.state.student_from_input.classroom_number} placeholder="student classroom number" required/></p>
            
         <button type="submit">Add new Student</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
import "./App.css";
import AddStudent from "./Components/AddStudent";
import StudentFilter from "./Components/StudentFilter";
import StudentFilterByClass from "./Components/StudentFilterByClass";
import School from "./Components/School";
import React, { Component } from 'react';

class App extends Component {
  static my_student_seq = 4
  state = {
    student_list: [
      {id: 1, personal_id: 12345677, first_name:"yaniv", last_name: "cohen", email: "yanivcohen@...", birth_year: 2000, classroom_number: 1},
      {id: 2, personal_id: 48596156, first_name:"karin-ella", last_name: "bitman", email: "karinellabitman@...", birth_year: 1998, classroom_number: 2},
      {id: 3, personal_id: 14567561, first_name:"jacob", last_name: "levi", email: "jacoblevi@...", birth_year: 2002, classroom_number: 3}
    ],
    filter_by_year: 0,
    filter_by_classroom: 0
  }
  deleteStudent = _id => {
      const new_student_list = this.state.student_list.filter(student => student.id !== _id)
      
      this.setState({
        student_list: new_student_list
      })
  }
  addStudent = student => {
    const new_student_list = [...this.state.student_list, {...student, id: App.my_student_seq++}];
    console.log(new_student_list);
    this.setState({
        student_list : new_student_list
    });
  }

  filterByYear = year => {
    this.setState({
      filter_by_year: year
  })};

  filterByClassroom = birth_year => {
    this.setState({
    filter_by_classroom: birth_year
  })};

  render() {
    return (
      <div>
        <header className="App-header">
            <h1>My School</h1>
            <AddStudent add_student={this.addStudent}/>
            
            <StudentFilter student_filter={this.filterByYear} />
            
            <StudentFilterByClass student_filter_classroom={this.filterByClassroom} />

            <School students={this.state.student_list} 
              delete_student={this.deleteStudent}
              student_filter={this.state.filter_by_year}
              student_filter_classroom={this.state.filter_by_classroom}
              /> 
            

        </header>
      </div>
    );
  }
}

export default App;
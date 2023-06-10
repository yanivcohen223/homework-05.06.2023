import Student from './student';
import React, { Component } from 'react';

class School extends Component {
  render() {
    return (
      <div>
            {
                this.props.students
                .filter(_student => this.props.student_filter_classroom == 0|| _student.classroom_number == this.props.student_filter_classroom)
                .filter(_student => _student.birth_year >= this.props.student_filter)
                .map(_student => 
                <Student  id={_student.id} personal_id={_student.personal_id} first_name={_student.first_name} last_name={_student.last_name} email={_student.email}
                   birth_year={_student.birth_year} classroom_number={_student.classroom_number} key={_student.id}
                   delete_student = {this.props.delete_student}
                />)
            }
      </div>
    );
  }
}

export default School;
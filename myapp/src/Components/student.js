import React, { Component } from 'react';

class Student extends Component {
    //deleteStudent() {}
    
    render() {
        //console.log(this.props);        
        const { id, personal_id, first_name, last_name, email, birth_year, classroom_number} = this.props
        return (
        <div key={id}>
            <p>ID: {id}</p>
            <p>Personal_id: {personal_id}</p>
            <p>First Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
            <p>Email: {email}</p>
            <p>Birth-year: {birth_year}</p>
            <p>Classroom Number: {classroom_number}</p>
            <button style={{color: 'red'}} onClick={ () => this.props.delete_student(id) }>X</button>
            <hr />
        </div>
        )
    }
}

export default Student;
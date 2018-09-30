import React, { Component } from 'react';
import Footer from '../../common/Footer';
import './deleteStudent.css';

export default class DeleteStudentUI extends Component {

    // Display all students
    // Delete student once click the delete button
    displayUsers = (users) => {
        const { deleteStudent } = this.props;
        if (users.length > 0) {
            users.sort((a, b) => a.name === b.name ? 0 : +(a.name > b.name) || -1)
            return users.map(({ name, code, email }, index) => (
                <div key={index} className='users' >
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Code: {code}</p>
                    </div>
                    <button onClick={() => deleteStudent(email)}>Delete</button>
                </div>
            ));
        } else return <p className='no-more-students'>No more students</p>
    };

    // Hide or show the Delete Student title
    deleteStudentTitle = (students) => {
        if (students.length > 0) {
            return (<div>
                <p className='title'>Delete Student</p>
                <p>You have {students.length} students</p>
            </div>);
        } else return '';
    };


    render() {
        const { navigate, students } = this.props;

        return (
            <div>
            <button className='go-back' onClick={() => navigate({ url: '/home' })}><i className="fas fa-long-arrow-alt-left fa-3x"></i></button>
            <div className='delete-students'>
                {this.deleteStudentTitle(students)}
                {this.displayUsers(students)}
                <Footer />
            </div>
            </div>
        );
    }
};

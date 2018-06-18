import React from 'react'

export default function ({ students }) {
    const studentList = students.map(student => (
        <li key={student.id}>{student.first_name} {student.last_name} {student.created_at}</li>
    ))
    
    return (
        <div>
            <h6>Student List</h6>
            <ul>
                {studentList}
            </ul>
        </div>
    )
}
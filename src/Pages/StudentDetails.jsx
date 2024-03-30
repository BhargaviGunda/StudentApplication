import React from 'react';
import { useParams } from 'react-router-dom';
const StudentDetails = () => {
    const params=useParams()
    return (
        <div>
            <h1>Details of students.......{params.studentid}</h1>
            <h2>Name:{params.studentname}</h2>
        </div>
    );
};

export default StudentDetails;
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentShow from './StudentShow';

const StudentList = () => { 
    return <>
    <StudentShow name="Prasanth kumar" rollno="62" branch="CSE"/><br/>
    <StudentShow name="Aswin" rollno="44" branch="CSE"/><br/>
    <StudentShow name="Vicky" rollno="48" branch="CSE"/><br/>
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentList/>);
export default StudentList;
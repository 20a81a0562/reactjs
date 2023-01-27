const StudentShow = (props) => {
    return <>
    <h2>Name of the student : {props.name}</h2>
    <h3>Roll number : {props.rollno} </h3>
    <h3>Branch : {props.branch}</h3>
    </>
}

export default StudentShow;
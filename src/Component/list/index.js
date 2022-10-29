//# create a json with students data like ( name, age, subject ) , show the list in UI.

import studentList from "./student.json";
import "./list.css";
const ListComponent = () => {
  return (
    <div className="student-list">
      <h1>List of Students</h1>
      {studentList.map((ele, index) => (
        <ul key={index}>
          <li
            style={{
              padding: "20px",
              border: " 2px solid red",
              color:"black",
            }}
          >
            <p>Name--{ele.name}</p>
            <p>Age--{ele.age}</p>
            <p>Gender--{ele.gender}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListComponent;

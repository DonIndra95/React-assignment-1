//# Create a form with radio, select, input. and show the value on submit.
import { useState } from "react";
import Radio from "./radioComponent";
import "./form.css";

const ResultComponent = ({ showResult, firstName, age, gender }) => {
  if (showResult) {
    return (
      <div className="result-component">
        <h3>Student Details</h3>
        <p>Name: {firstName}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
    );
  }
};

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [studentAge, setStudentAge] = useState();
  const [currentRadioValue, setCurrentRadioValue] = useState();
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="class-form">
      <form
        onSubmit={(event) => {
          event.stopPropagation();
          event.preventDefault();
          setShowResult(true);
        }}
      >
        <label htmlFor="first-name">
          Name:
          <input
            type="text"
            name="first-name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            onClick={()=> setShowResult(false)}
          />
        </label>
        <br />
        <p>
          Select Gender:
          <Radio
            currentRadioValue={currentRadioValue}
            setCurrentRadioValue={setCurrentRadioValue}
          />
        </p>
        <label htmlFor="first-name">
          Age:
          <input
            type="number"
            name="student-age"
            style={{ width: "40px" }}
            value={studentAge}
            onChange={(event) => {
              setStudentAge(event.target.value);
            }}
            onClick={()=> setShowResult(false)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <ResultComponent
          showResult={showResult}
          firstName={firstName}
          age={studentAge}
          gender={currentRadioValue}
        />
      </form>
    </div>
  );
};

export default FormComponent;

import ListComponent from "./Component/list";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FormComponent from "./Component/form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/react-assignment-1"
            element={
              <div>
                <p
                  style={{
                    fontStyle: "italic",
                    color: "brown",
                    fontSize: "4vh",
                    textDecorationLine: "underline",
                  }}
                >
                  React Assignments
                </p>
                <ol>
                  <li>
                    <Link to="/studentList">Go to Student list</Link>
                  </li>
                  <li>
                    <Link to="/form">Go to form</Link>
                  </li>
                </ol>
              </div>
            }
          />
          <Route path="studentList" element={<ListComponent />} />
          <Route path="form" element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

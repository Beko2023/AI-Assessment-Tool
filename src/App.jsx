import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizLayout from "./components/QuizLayout";
import SubmitPage from "./components/SubmitPage";
import QuizStart from "./components/QuizStart";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route
          path="/contact-information"
          element={<QuizLayout section={"Contact Information"} />}
        />
        <Route
          path="/business-snapshot"
          element={<QuizLayout section={"Business Snapshot"} />}
        />
        <Route
          path="/technology-snapshot"
          element={<QuizLayout section={"Technology Snapshot"} />}
        />
        <Route
          path="/key-challenges"
          element={<QuizLayout section={"Key Challenges"} />}
        />
        <Route
          path="/data-maturity"
          element={<QuizLayout section="Data Maturity" />}
        />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
}

export default App;

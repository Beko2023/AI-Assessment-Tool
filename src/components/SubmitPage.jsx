// components/SubmitPage.js
import { useNavigate } from "react-router-dom";

export default function SubmitPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // send back end information
    console.log("Submitting quiz...");
    alert("Quiz submitted successfully!");
    navigate("/");
  };

  return (
    <div className="submit-page">
      <h2 className="header"> Review Your Answers</h2>
      <p className="landing-desc">Ready to submit your quiz?</p>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function SubmitPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/business-snapshot");
  };

  return (
    <div className="quiz-start-page">
      <div className="landing-page-container">
        <h2 className="header"> Business Maturity Assessment</h2>
        <p className="catchphrase">
          Your company’s success hinges on how effectively you integrate Data
          and AI capabilities. We have built this powerful AI tool to help you
          discover where you stand today. Let our AI-powered tool provide
          actionable insights, a tailored roadmap, and a pilot program to
          kickstart your next steps.
        </p>
        <p className="landing-desc">
          This assessment should take around 5 minutes.
        </p>
        <button onClick={handleSubmit}>Start</button>
      </div>
    </div>
  );
}

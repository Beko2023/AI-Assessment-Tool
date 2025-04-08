import React from "react";
import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const { state } = useLocation();
  const { score, responses } = state || {};

  return (
    <div className="results-page">
      <h1>Your Results</h1>
      <div className="score">
        <h2>Your Score: {score}</h2>
        {/* Add more result details here */}
      </div>
      {/* Optionally show responses */}
    </div>
  );
};

export default ResultsPage;

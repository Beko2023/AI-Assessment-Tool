import React from "react";
import QuizSection from "../components/quiz/QuizSection";
import { allQuestions } from "../data/index";

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <h1>AI Assessment Survey</h1>
      <QuizSection questions={allQuestions} />
    </div>
  );
};

export default QuizPage;

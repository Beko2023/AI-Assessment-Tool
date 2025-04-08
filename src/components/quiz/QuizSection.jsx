import React from "react";
import Question from "./Question";
import QuizProgress from "./QuizProgress";
import QuestionNavigation from "./QuestionNavigation";
import useMultiQuestionQuiz from "../../hooks/useMultiQuestionQuiz";

const QUESTIONS_PER_PAGE = 3;

const QuizSection = ({ questions }) => {
  const {
    currentQuestions,
    currentPage,
    totalPages,
    responses,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
    isLastPage,
  } = useMultiQuestionQuiz(questions, QUESTIONS_PER_PAGE);

  return (
    <div className="quiz-section">
      <div className="questions-container">
        {currentQuestions.map((question) => (
          <Question
            key={question.id}
            question={question}
            value={responses[question.id]}
            onChange={handleChange}
          />
        ))}
      </div>

      <QuestionNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        onSubmit={handleSubmit}
        showPrev={currentPage > 0}
        showNext={!isLastPage}
        showSubmit={isLastPage}
      />

      <QuizProgress current={currentPage + 1} total={totalPages} />
    </div>
  );
};

export default QuizSection;

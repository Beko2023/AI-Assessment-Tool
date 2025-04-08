import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useQuiz = (questions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  const QUESTIONS_PER_PAGE = 3;
  const currentQuestions = questions.slice(
    currentIndex,
    currentIndex + QUESTIONS_PER_PAGE
  );
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const isLastPage = currentIndex + QUESTIONS_PER_PAGE >= questions.length;

  const handleChange = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    const nextIndex = currentIndex + QUESTIONS_PER_PAGE;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - QUESTIONS_PER_PAGE;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore(responses, questions);
    navigate("/results", { state: { score, responses } });
  };

  const calculateScore = (responses, questions) => {
    // Implement your scoring algorithm here
    return 0; // Placeholder
  };

  return {
    currentQuestions, // Now returns an array of questions
    currentPage: Math.floor(currentIndex / QUESTIONS_PER_PAGE) + 1,
    totalPages,
    responses,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
    isLastPage,
  };
};

export default useQuiz;

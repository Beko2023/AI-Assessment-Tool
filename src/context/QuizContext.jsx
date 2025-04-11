import { createContext, useContext, useState } from "react";
import businessProfile from "../data/business_profile";
// import followupQuestions from "../data/follow_up";
import keyChallenges from "../data/key_challenges";
import dataMaturity from "../data/data_maturity";
import contactFormFields from "../data/contactForm";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [questionSets] = useState({
    "Contact Information": contactFormFields,
    "Business Profile": businessProfile,
    // "Technology Snapshot": followupQuestions,
    "Key Challenges": keyChallenges,
    "Data Maturity": dataMaturity,
  });

  return (
    <QuizContext.Provider value={{ answers, setAnswers, questionSets }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}

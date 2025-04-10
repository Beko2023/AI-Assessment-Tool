import { createContext, useContext, useState } from "react";
import snapShotQuestions from "../data/snapshot";
import followupQuestions from "../data/follow_up";
import keyChallenges from "../data/key_challenges";
import dataReadiness from "../data/data_readiness";
import contactFormFields from "../data/contactForm";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [questionSets] = useState({
    "Contact Information": contactFormFields,
    "Business Snapshot": snapShotQuestions,
    "Technology Snapshot": followupQuestions,
    "Key Challenges": keyChallenges,
    "Data Maturity": dataReadiness,
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

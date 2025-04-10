import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import snapShotQuestions from "../data/snapshot";
import followupQuestions from "../data/follow_up";
import keyChallenges from "../data/key_challenges";
import dataReadiness from "../data/data_readiness";
import ContactForm from "./ContactForm";
import contactFormFields from "../data/contactForm";
import { useQuiz } from "../context/QuizContext";

const questionSets = {
  "Contact Information": contactFormFields,
  "Business Snapshot": snapShotQuestions,
  "Technology Snapshot": followupQuestions,
  "Key Challenges": keyChallenges,
  "Data Maturity": dataReadiness,
};

const sectionOrder = [
  "Contact Information",
  "Business Snapshot",
  "Technology Snapshot",
  "Key Challenges",
  "Data Maturity",
];

export default function QuizLayout({ section }) {
  const { answers, setAnswers, questionSets } = useQuiz();
  const [isAutoSkipping, setIsAutoSkipping] = useState(false);
  const navigate = useNavigate();
  const questions = questionSets[section];
  const isLastSection =
    sectionOrder.indexOf(section) === sectionOrder.length - 1;

  const handleAnswer = (questionId, answer, isCheckbox = false) => {
    if (isCheckbox) {
      setAnswers((prev) => {
        const currentAnswers = prev[questionId] || [];
        const questionConfig = keyChallenges.find((q) => q.id === questionId);
        const maxSelections = questionConfig?.maxSelections;

        if (currentAnswers.includes(answer)) {
          return {
            ...prev,
            [questionId]: currentAnswers.filter((item) => item !== answer),
          };
        } else {
          if (maxSelections && currentAnswers.length >= maxSelections) {
            return prev;
          }
          return {
            ...prev,
            [questionId]: [...currentAnswers, answer],
          };
        }
      });
    } else {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    }
  };

  const goToNextSection = () => {
    const currentIndex = sectionOrder.indexOf(section);
    if (currentIndex < sectionOrder.length - 1) {
      const nextSection = sectionOrder[currentIndex + 1];
      const path =
        nextSection === "Contact Information"
          ? "/contact-information"
          : `/${nextSection.toLowerCase().replace(/\s+/g, "-")}`;
      navigate(path);
    } else {
      navigate("/submit");
    }
  };

  const goToPreviousSection = () => {
    const currentIndex = sectionOrder.indexOf(section);
    if (currentIndex > 0) {
      const prevSection = sectionOrder[currentIndex - 1];
      const path =
        prevSection === "Contact Information"
          ? "/contact-information"
          : `/${prevSection.toLowerCase().replace(/\s+/g, "-")}`;
      navigate(path);
    }
  };

  const filteredQuestions = questions.filter((question) => {
    if (typeof question.showIf === "function") {
      return question.showIf(answers);
    }
    return true;
  });

  useEffect(() => {
    if (filteredQuestions.length === 0 && section !== "Contact Information") {
      setIsAutoSkipping(true);
      const timer = setTimeout(() => {
        goToNextSection();
        setIsAutoSkipping(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [filteredQuestions, section, goToNextSection]);

  useEffect(() => {
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    };

    const timeout = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeout);
  }, [section]);

  if (section === "Contact Information") {
    return (
      <div className="quiz-app">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${
                ((sectionOrder.indexOf(section) + 1) / sectionOrder.length) *
                100
              }%`,
            }}
          />
        </div>
        <h1 className="header">AI ASSESSMENT</h1>
        <ContactForm
          answers={answers}
          handleAnswer={handleAnswer}
          goToNextSection={goToNextSection}
        />
      </div>
    );
  }

  const renderOptions = (question) => {
    switch (question.type) {
      case "checkbox":
        return (
          <div className="checkbox-options">
            {question.options.map((option, index) => {
              const optionValue =
                typeof option === "object" ? option.value : option;
              const optionLabel =
                typeof option === "object" ? option.label : option;
              const isChecked =
                answers[question.id]?.includes(optionValue) || false;

              return (
                <label key={index} className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() =>
                      handleAnswer(question.id, optionValue, true)
                    }
                  />
                  {optionLabel}
                </label>
              );
            })}
          </div>
        );

      case "radio":
        return (
          <div className="radio-options">
            {question.options.map((option, index) => {
              const optionValue =
                typeof option === "object" ? option.value : option;
              const optionLabel =
                typeof option === "object" ? option.label : option;

              return (
                <label key={index} className="radio-option">
                  <input
                    type="radio"
                    name={question.id}
                    value={optionValue}
                    checked={answers[question.id] === optionValue}
                    onChange={() => handleAnswer(question.id, optionValue)}
                  />
                  {optionLabel}
                </label>
              );
            })}
          </div>
        );

      case "select":
        return (
          <select
            className="select-option"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          >
            <option value="">Select an option</option>
            {question.options.map((option, index) => {
              const optionValue =
                typeof option === "object" ? option.value : option;
              const optionLabel =
                typeof option === "object" ? option.label : option;

              return (
                <option key={index} value={optionValue}>
                  {optionLabel}
                </option>
              );
            })}
          </select>
        );

      default:
        return (
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  answers[question.id] ===
                  (typeof option === "object" ? option.value : option)
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleAnswer(
                    question.id,
                    typeof option === "object" ? option.value : option
                  )
                }
              >
                {typeof option === "object" ? option.label : option}
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="quiz-app">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${
              ((sectionOrder.indexOf(section) + 1) / sectionOrder.length) * 100
            }%`,
          }}
        />
      </div>
      <h1 className="header">AI ASSESSMENT</h1>
      <h2 className="section-header">{section}</h2>
      {sectionOrder.indexOf(section) === 1 && (
        <p className="description-details">
          *Questions will be generated based on your answers on this section*
        </p>
      )}
      {filteredQuestions.length > 0 ? (
        <div className="questions-container">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="question-container">
              <h3 className="questions">
                {typeof question.question === "string"
                  ? question.question
                  : question.question.label || question.question.value}
              </h3>
              {question.description && (
                <p className="description">{`(${question.description})`}</p>
              )}
              {renderOptions(question)}
            </div>
          ))}
        </div>
      ) : section !== "Contact Information" ? (
        <div className="no-questions-message">
          <div className="loading-spinner"></div>
          <p>No questions available based on your previous answers</p>
          <p>Continuing to next section automatically...</p>
        </div>
      ) : null}
      <div className="navigation">
        {sectionOrder.indexOf(section) > 0 && (
          <button onClick={goToPreviousSection}>Back</button>
        )}
        <button onClick={goToNextSection}>
          {isLastSection ? "Submit Answers" : "Next Section"}
        </button>
      </div>
    </div>
  );
}

// src/components/ResultsPage.js
import { useQuiz } from "../context/QuizContext";

export default function ResultsPage() {
  const { answers, questionSets } = useQuiz();
  const sectionOrder = [
    "Contact Information",
    "Business Profile",
    // "Technology Snapshot",
    "Key Challenges",
    "Data Maturity",
  ];

  // Handle contact form fields differently
  const renderContactInfo = () => {
    return questionSets["Contact Information"]?.map((field) => {
      const answer = answers[field.id];
      return (
        <div key={field.id} className="question-result">
          <h3>{field.label}</h3>
          <p>
            <strong>Answer:</strong> {answer || "Null"}
          </p>
        </div>
      );
    });
  };

  // Handle regular quiz questions
  const renderQuizQuestion = (question) => {
    const answer = answers[question.id];
    const questionText =
      typeof question.question === "string"
        ? question.question
        : question.question?.label || question.question?.value || question.id;

    return (
      <div key={question.id} className="question-result">
        <h3>{questionText}</h3>
        <p>
          <strong>Answer:</strong> {formatQuizAnswer(question, answer)}
        </p>
      </div>
    );
  };

  // Format quiz answers (not needed for contact info)
  const formatQuizAnswer = (question, answer) => {
    if (answer === undefined || answer === null) return "null";

    if (Array.isArray(answer)) {
      return answer.join(", ");
    }

    if (question.options) {
      const foundOption = question.options.find((opt) => {
        if (typeof opt === "object") return opt.value === answer;
        return opt === answer;
      });
      return typeof foundOption === "object"
        ? foundOption.label || foundOption.value
        : foundOption;
    }

    return answer.toString();
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>

      {sectionOrder.map((section) => (
        <div key={section} className="section-results">
          <h2>{section}</h2>

          {section === "Contact Information"
            ? renderContactInfo()
            : questionSets[section]?.map(renderQuizQuestion)}
        </div>
      ))}
    </div>
  );
}

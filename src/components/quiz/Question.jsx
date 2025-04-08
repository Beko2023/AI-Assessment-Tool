import React from "react";

const Question = ({ question, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(question.id, e.target.value);
  };

  const handleCheckboxChange = (option) => {
    const newValue = value?.includes(option)
      ? value.filter((v) => v !== option)
      : [...(value || []), option];
    onChange(question.id, newValue);
  };

  return (
    <div className="question" style={{ marginBottom: "2rem" }}>
      <h3>{question.text || question.question}</h3>

      {question.type === "select" && (
        <select
          value={value || ""}
          onChange={handleInputChange}
          className="select-input"
        >
          <option value="" disabled>
            Select an option
          </option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {question.type === "radio" && (
        <div
          className="options"
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {question.options.map((option) => (
            <label
              key={option}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={value === option}
                onChange={handleInputChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {question.type === "checkbox" && (
        <div
          className="options"
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {question.options.map((option) => (
            <label
              key={option}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="checkbox"
                checked={value?.includes(option) || false}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;

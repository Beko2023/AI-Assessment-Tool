export default function ContactForm({
  answers,
  handleAnswer,
  goToNextSection,
}) {
  const handleChange = (e, fieldId) => {
    handleAnswer(fieldId, e.target.value);
  };

  const allFieldsFilled = fields.every(
    (field) => !field.required || answers[field.id]
  );

  return (
    <div className="quiz-app">
      <h2 className="section-header">Contact Information</h2>
      <p className="section-description">
        Please provide your contact details before starting the assessment
      </p>

      <div className="form-fields">
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>{field.label}:</label>
            <input
              type={field.type}
              id={field.id}
              value={answers[field.id] || ""}
              onChange={(e) => handleChange(e, field.id)}
              required={field.required}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToNextSection}
        disabled={!allFieldsFilled}
        className={!allFieldsFilled ? "disabled" : ""}
      >
        Start Assessment
      </button>
    </div>
  );
}

export default function ContactForm({
  answers,
  handleAnswer,
  goToNextSection,
}) {
  const fields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    {
      id: "companyName",
      label: "Company Name",
      type: "text",
      required: true,
    },
    { id: "email", label: "Business Email", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: false },
    { id: "country", label: "Country", type: "text", required: true },
  ];

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

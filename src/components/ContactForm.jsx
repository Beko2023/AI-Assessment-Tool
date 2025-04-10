import { useState } from "react";
import contactFormFields from "../data/contactForm";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm({
  answers,
  handleAnswer,
  goToNextSection,
}) {
  const [formErrors, setFormErrors] = useState({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const validateField = (field, value) => {
    if (field.required && !value.trim()) {
      return field.errorMessage || "This field is required";
    }

    if (field.minLength && value.length < field.minLength) {
      return (
        field.errorMessage || `Minimum ${field.minLength} characters required`
      );
    }

    if (field.pattern) {
      const regex = new RegExp(field.pattern);
      if (!regex.test(value)) {
        return field.errorMessage || "Invalid format";
      }
    }

    return "";
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    handleAnswer(field.id, value);

    const error = validateField(field, value);
    setFormErrors((prev) => ({ ...prev, [field.id]: error }));
  };

  const handleVerificationSuccess = (token) => {
    handleAnswer("h-captcha-response", token);
    setIsCaptchaVerified(true);
  };

  const allFieldsValid = contactFormFields.every((field) => {
    const value = answers[field.id] || "";
    const error = validateField(field, value);
    return !error;
  });

  //activate after back-end validation avail.
  // const canSubmit = allFieldsValid && isCaptchaVerified;
  const canSubmit = allFieldsValid;

  return (
    <div className="quiz-app">
      <h2 className="section-header">Contact Information</h2>
      <p className="section-description">
        Please provide your contact details before starting the assessment
      </p>

      <div className="form-fields">
        {contactFormFields.map((field) => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id}>{field.label}:</label>
            <input
              type={field.type}
              id={field.id}
              value={answers[field.id] || ""}
              onChange={(e) => handleChange(e, field)}
              required={field.required}
              pattern={field.pattern}
              minLength={field.minLength}
            />
            {formErrors[field.id] && (
              <p className="error-message">{formErrors[field.id]}</p>
            )}
          </div>
        ))}
      </div>
      {/* <div className="captcha-container">
        <HCaptcha
          sitekey="your-sitekey-here" //Replace later w/ back-end
          onVerify={handleVerificationSuccess}
        />
      </div> */}
      <button
        onClick={goToNextSection}
        disabled={!allFieldsValid}
        className={!canSubmit ? "disabled" : ""}
      >
        Start Assessment
      </button>
    </div>
  );
}

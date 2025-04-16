const contactFormFields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    pattern: "^[A-Za-zÇçĞğİıÖöŞşÜüÀ-ÖØ-öø-ÿ' -]+$",
    errorMessage: "Please enter a valid first name",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    pattern: "^[A-Za-zÇçĞğİıÖöŞşÜüÀ-ÖØ-öø-ÿ' -]+$",
    errorMessage: "Please enter a valid last name",
  },
  {
    id: "companyName",
    minLength: 2,
    errorMessage: "Please enter your company name",
    label: "Company Name",
    type: "text",
    required: true,
  },
  {
    id: "jobTitle",
    minLength: 2,
    errorMessage: "Please enter your position at the company",
    label: "Job Title",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "Business Email",
    type: "email",
    required: true,
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    errorMessage:
      "Please enter a valid business email (e.g., name@company.com)",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    pattern: "^[+]?[(]?[0-9]{1,4}[)]?[-\\s.0-9]{6,}$",
    errorMessage: "Please enter a valid phone number",
  },
  { id: "country", label: "Country", type: "text", required: true },
];

export default contactFormFields;

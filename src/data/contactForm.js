const contactFormFields = [
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

export default contactFormFields;

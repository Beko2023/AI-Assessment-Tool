const dataMaturity = [
  {
    id: "data_quality",
    question:
      "How would you describe the overall quality of your internal data?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "High quality (clean, accurate, consistent)",
      "Moderate (some gaps, cleaning needed)",
      "Low quality (inconsistent, error-prone)",
      "Not sure",
    ],
  },
  {
    id: "data_unification",
    question:
      "Are your data sources unified and accessible across the organization?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Fully unified (cross-department access)",
      "Partially unified (some access/silos)",
      "Mostly siloed",
      "Not accessible / unsure",
    ],
  },
  {
    id: "data_automation",
    question: "To what extent is your data processing automated?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Fully automated (end-to-end data pipelines)",
      "Partially automated (some manual intervention required)",
      "Mostly manual (few automated processes in place)",
      "Entirely manual",
    ],
  },
  {
    id: "data_infrastructure_maturity",
    question: "How mature is your data infrastructure?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Real-time systems and scalable cloud infra",
      "Centralized data warehouse/lake with analytics tools",
      "Department-level data systems with limited integration",
      "Basic spreadsheets and manual collection",
    ],
  },
  {
    id: "data_usage_decision_making",
    question:
      "How frequently does your company use data for decision-making across key business functions?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Frequently (data is used for most decisions)",
      "Occasionally (data is considered but not always the main driver)",
      "Rarely (decisions are made mostly by intuition or experience)",
      "Never (we do not use data for decision-making)",
    ],
  },
  {
    id: "data_governance_processes",
    question:
      "What formalized processes do you have in place to ensure the accuracy, consistency, and security of your data?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Ad-hoc checks",
      "Basic data governance policies",
      "Comprehensive data governance framework",
      "Automated data quality monitoring with AI-driven anomaly detection",
    ],
  },
  {
    id: "internal_data_team",
    question: "Does your company have an internal data or analytics team?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Yes, we have a dedicated in-house data team",
      "Yes, but it’s a small or part-time team",
      "No, we rely on external partners/vendors",
      "No, and we don’t currently work with anyone",
    ],
  },
  {
    id: "data_governance_framework",
    question:
      "Does your company have a formal data governance framework in place to ensure data privacy, quality, and security?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Yes, and it is fully enforced.",
      "Yes, but it is not fully enforced.",
      "We are in the process of developing a data governance framework.",
      "No, we do not have a formal data governance policy.",
    ],
  },
  {
    id: "covered_governance_aspects",
    question: "Which aspects are covered in your data governance framework?",
    type: "checkbox",
    description:
      "Select all aspects currently covered in your governance framework",
    options: [
      "Data quality management",
      "Data privacy and security (e.g., GDPR, HIPAA compliance)",
      "Data access controls",
      "Data lifecycle management (collection, storage, retention, deletion)",
      "Metadata management",
      "Other (please specify)",
    ],
    showIf: (answers) =>
      answers.data_governance_framework?.includes(
        "Yes, and it is fully enforced." ||
          "Yes, but it is not fully enforced. "
      ),
  },
  {
    id: "developing_governance_aspects",
    question:
      "Which aspects are you currently developing in your data governance framework?",
    type: "checkbox",
    description: "Select all aspects that are currently under development",
    options: [
      "Data quality management",
      "Data privacy and security (e.g., GDPR, HIPAA compliance)",
      "Data access controls",
      "Data lifecycle management (collection, storage, retention, deletion)",
      "Metadata management",
      "Others",
    ],
    showIf: (answers) =>
      answers.data_governance_framework?.includes(
        "We are in the process of developing"
      ),
  },
];

export default dataMaturity;

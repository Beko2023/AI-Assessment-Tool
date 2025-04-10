const dataReadiness = [
  {
    id: "dataQuality",
    question:
      "How would you describe the overall quality and cleanliness of your company’s data?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "High quality (data is accurate, complete, and regularly cleaned)",
      "Moderate quality (some inaccuracies or gaps in the data, cleaned occasionally)",
      "Low quality (significant gaps or inaccuracies, rarely cleaned)",
      "We are unsure of our data quality",
    ],
  },
  {
    id: "dataChallenges",
    question: "What challenges do you face with your current data management?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Data silos",
      "Inconsistent data",
      "Lack of data governance",
      "Poor data quality",
      "Difficulty in integration",
      "Lack of metadata or documentation",
      "Limited access control or data security",
      "Lack of standardized formats",
      "High maintenance effort",
    ],
  },
  {
    id: "dataUsageFrequency",
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
    id: "dataInfrastructureMaturity",
    question:
      "How would you describe the maturity of your data infrastructure in supporting advanced analytics and AI initiatives?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Basic data collection with minimal integration",
      "Moderate integration with departmental silos",
      "Fully integrated with a centralized data warehouse",
      "Advanced infrastructure with real-time data processing and analysis",
    ],
  },
  {
    id: "dataGovernanceProcesses",
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
    id: "dataAccessibility",
    question:
      "To what extent are your data sources unified and accessible across your organization for analytical purposes?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Data is isolated within departments",
      "Partial integration with some cross-departmental access",
      "Fully integrated with organization-wide access",
      "Unified data platform with advanced analytics capabilities available to all relevant stakeholders",
    ],
  },
  // {
  //   id: "dataGovernanceFramework",
  //   question:
  //     "Does your company have a formal data governance framework in place to ensure data privacy, quality, and security, and what aspects does it cover?",
  //   type: "radio",
  //   description: "Please choose the most relevant answer",
  //   options: [
  //     {
  //       label: "Yes, and it is fully enforced.",
  //       value: "fully_enforced",
  //       followUp: {
  //         id: "frameworkAspects",
  //         question:
  //           "Which aspects are covered in your data governance framework?",
  //         type: "checkbox",

  //         options: [
  //           "Data quality management",
  //           "Data privacy and security (e.g., GDPR, HIPAA compliance)",
  //           "Data access controls",
  //           "Data lifecycle management (collection, storage, retention, deletion)",
  //           "Metadata management",
  //           "Other (please specify)",
  //         ],
  //       },
  //     },
  //     {
  //       label: "Yes, but it is not fully enforced.",
  //       value: "partially_enforced",
  //       followUp: {
  //         id: "frameworkAspectsPartial",
  //         question:
  //           "Which aspects are covered in your data governance framework?",
  //         type: "checkbox",
  //         options: [
  //           "Data quality management",
  //           "Data privacy and security (e.g., GDPR, HIPAA compliance)",
  //           "Data access controls",
  //           "Data lifecycle management (collection, storage, retention, deletion)",
  //           "Metadata management",
  //           "Other (please specify)",
  //         ],
  //       },
  //     },
  //     {
  //       label:
  //         "We are in the process of developing a data governance framework.",
  //       value: "in_development",
  //       followUp: {
  //         id: "developingAspects",
  //         question:
  //           "Which aspects are you currently developing in your data governance framework?",
  //         type: "checkbox",
  //         options: [
  //           "Data quality management",
  //           "Data privacy and security (e.g., GDPR, HIPAA compliance)",
  //           "Data access controls",
  //           "Data lifecycle management (collection, storage, retention, deletion)",
  //           "Metadata management",
  //           "Other (please specify)",
  //         ],
  //       },
  //     },
  //     {
  //       label: "No, we do not have a formal data governance policy.",
  //       value: "none",
  //     },
  //   ],
  // },
];

export default dataReadiness;

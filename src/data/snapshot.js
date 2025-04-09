const snapShotQuestions = [
  {
    id: "industry",
    question: "Which industry does your company operate in?",
    type: "select",
    description: "Please choose the most relevant answer",
    options: [
      "Manufacturing",
      "Insurance",
      "Investment",
      "Retail",
      "Healthcare",
      "Finance",
      "Technology",
      "Other",
    ],
  },
  {
    id: "employees",
    question: "How many employees does your company have?",
    type: "select",
    description: "Please choose the most relevant answer",
    options: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001+"],
  },
  {
    id: "revenue",
    question: "What is your company’s annual revenue?",
    type: "select",
    description: "Please choose the most relevant answer",
    options: [
      "Less than $1M",
      "$1M-$10M",
      "$10M-$50M",
      "$50M-$100M",
      "$100M+",
      "NonProfit",
      "Government",
    ],
  },
  {
    id: "regions",
    question: "In how many regions or countries does your company operate?",
    type: "select",
    description: "Please choose the most relevant answer",
    options: [
      "Local",
      "National",
      "1-3 Countries",
      "4-10 Countries",
      "Global (10+ Countries)",
    ],
  },
  {
    id: "dataVolume",
    question:
      "How much data does your company generate and collect on a daily basis?",
    type: "select",
    description: "Please choose the most relevant answer",
    options: [
      "Less than 1 GB",
      "1 GB - 10 GB",
      "10 GB - 100 GB",
      "100 GB - 1 TB",
      "More than 1 TB",
      "Not Sure",
    ],
  },
  {
    id: "systems",
    question:
      "What technologies or systems do you currently use in your business operations?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "ERP",
      "CRM",
      "Data Warehousing Tools",
      "BI Tools",
      "Custom Software",
      "Cloud Services",
    ],
  },
  {
    id: "decisionMaking",
    question: "How are most decisions made in your company?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Based on intuition or experience",
      "Data is considered, but not the main driver",
      "Decisions are mostly data-driven",
      "We use automated decision-making (e.g., AI or algorithms)",
    ],
  },
  {
    id: "automationLevel",
    question: "To what extent is your data processing automated?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Fully automated (end-to-end pipelines)",
      "Partially automated (some manual intervention)",
      "Mostly manual (few automated processes)",
      "No automation, all manual",
    ],
  },
];

export default snapShotQuestions;

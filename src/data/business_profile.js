const businessProfile = [
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
      "Finance & Banking",
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
      "NonProfit/Government",
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
    question: "How much data does your company generate and collect daily",
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
      "None",
    ],
  },
  {
    id: "analytics_experience",
    question:
      "Which of the following best describes your current experience with analytics or AI?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Yes, deployed in production",
      "Yes, at pilot or PoC stage",
      "We’ve experimented, but nothing is live",
      "No, but we’re planning to",
      "No, and no plans yet",
    ],
  },
  {
    id: "ai_urgency",
    question: "How urgently is your organization looking to embrace AI?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Immediate priority – AI is a top initiative; execution is already underway",
      "High urgency, planning phase – Actively planning adoption within the next 6–12 months",
      "Moderate urgency – AI is on the radar, but not prioritized yet",
      "Low or no urgency – No clear roadmap or urgency around AI right now",
    ],
  },
  {
    id: "ai_receptiveness",
    question:
      "How receptive is your management to embracing the changes brought about by AI?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Highly receptive – Leadership actively supports AI-driven change",
      "Somewhat receptive – Leadership is open to AI but still cautious",
      "Uncertain or divided – Leadership views on AI are mixed or unclear",
      "Not receptive – Management is resistant or skeptical about AI",
    ],
  },
];

export default businessProfile;

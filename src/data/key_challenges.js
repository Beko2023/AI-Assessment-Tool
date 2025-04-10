const keyChallenges = [
  {
    id: "businessChallenges",
    question:
      "What are the top 3 business challenges your company is facing today?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Inefficient Processes",
      "Market Competition",
      "Talent Management",
      "Risk Management",
      "High Operational Costs",
      "Supply Chain Disruptions",
      "Production Delays",
      "Inconsistent Product/Service Quality",
      "Customer Service Inconsistencies",
      "Inefficiencies in Resource Allocation",
      "Supply Chain Volatility",
      "Other (please specify)",
    ],
    maxSelections: 3,
  },
  {
    id: "strategicChallenges",
    question:
      "What strategic challenges are you looking to address in the next 12 months?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Market Expansion",
      "Product Innovation",
      "Competitive Pressure",
      "Customer Retention",
      "Digital Transformation",
      "Other (please specify)",
    ],
  },
  {
    id: "dataInsights",
    question: "Are you able to easily derive insights from your current data?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Yes, we derive actionable insights regularly",
      "Yes, but it’s a manual and time-consuming process",
      "No, we struggle to extract insights",
      "We don’t use data for insights",
    ],
  },
  {
    id: "dataAccessibility",
    question:
      "How would you describe the accessibility of data across your organization?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Data is siloed in different departments",
      "Data is accessible, but only to certain teams",
      "Data is mostly accessible to all teams",
      "Fully democratized (all teams have access to relevant data)",
    ],
  },
  {
    id: "dataObstacles",
    question:
      "What is your company’s biggest obstacle to using data effectively?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Lack of Data Quality",
      "Lack of Data Infrastructure",
      "Lack of Technical Expertise",
      "Lack of Executive Buy-in",
      "Poor Data Governance",
      "Difficulty Integrating Data from Multiple Sources",
      "Lack of Single-Source Truth Platform",
      "Budgetary Constraints",
      "Lack of a Unified Digital Transformation Strategy",
      "Unclear ROI or Value Proposition",
      "Security or Compliance Concerns",
      "Resistance to Change from Employees",
    ],
  },
  {
    id: "dataAIDrivers",
    question: "What’s the main driver for seeking data and AI solutions?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: [
      "Cost Reduction",
      "Revenue Growth",
      "Process Automation",
      "Risk Mitigation",
      "Innovation and Differentiation",
      "Customer Experience Improvement",
    ],
  },
];

export default keyChallenges;

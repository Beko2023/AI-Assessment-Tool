const followUpQuestions = [
  {
    id: "erpSystems",
    question: "Which ERP system(s) does your company use?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "SAP",
      "Oracle ERP Cloud",
      "Microsoft Dynamics 365",
      "NetSuite",
      "Infor ERP",
      "Sage ERP",
      "Epicor",
      "Odoo",
      "Workday",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("ERP"),
  },
  {
    id: "crmSystems",
    question: "Which CRM system(s) does your company use?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Salesforce",
      "HubSpot",
      "Microsoft Dynamics 365 CRM",
      "Zoho CRM",
      "Pipedrive",
      "SugarCRM",
      "Freshworks CRM",
      "Zendesk Sell",
      "Oracle CRM",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("CRM"),
  },
  {
    id: "biTools",
    question: "Which data analytics tool(s) does your company use?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Microsoft Power BI",
      "Tableau",
      "Qlik Sense",
      "Looker",
      "Google Data Studio",
      "SAP Analytics Cloud",
      "SAS",
      "IBM Cognos Analytics",
      "Domo",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("BI Tools"),
  },
  {
    id: "customSoftwareDevelopment",
    question: "Is the custom software developed in-house or outsourced?",
    type: "radio",
    description: "Please choose the most relevant answer",
    options: ["In-house", "Outsourced", "Both"],
    showIf: (answers) => answers.systems?.includes("Custom Software"),
  },
  {
    id: "cloudServices",
    question: "Which cloud services do you use? (Select all that apply)",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "AWS (Amazon Web Services)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "IBM Cloud",
      "Oracle Cloud",
      "Alibaba Cloud",
      "DigitalOcean",
      "Rackspace",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("Cloud Services"),
  },
  {
    id: "dataWarehouseSolutions",
    question: "Which data warehousing solution(s) does your company use?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Amazon Redshift",
      "Google BigQuery",
      "Snowflake",
      "Microsoft Azure Synapse Analytics",
      "Oracle Autonomous Data Warehouse",
      "SAP Data Warehouse Cloud",
      "IBM Db2 Warehouse",
      "Teradata",
      "Cloudera",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("Data Warehousing Tools"),
  },
  {
    id: "dataManagement",
    question:
      "What data management tools and platforms are you currently using?",
    type: "checkbox",
    description: "Please pick the most relevant options",
    options: [
      "Data warehouse (e.g., Amazon Redshift, Google BigQuery, Snowflake)",
      "Data lake (e.g., Hadoop, Azure Data Lake)",
      "Cloud-based solutions (e.g., AWS, Azure, Google Cloud)",
      "On-premise solutions (e.g., Oracle, SQL Server)",
      "Other",
    ],
    showIf: (answers) => answers.systems?.includes("Data Management Tools"),
  },
];

export default followUpQuestions;

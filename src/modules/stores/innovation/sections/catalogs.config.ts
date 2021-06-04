import { FormEngineParameterModel } from '@modules/shared/forms';

// Innovation.
export const maturityLevelItems = [
  { value: 'DISCOVERY', label: 'Discovery or early development' },
  { value: 'ADVANCED', label: 'Advanced development and testing' },
  { value: 'READY', label: 'Ready or nearly ready for adoption and scale' }
];

export const yesPartiallyNoItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'PARTIALLY', label: 'Partially' },
  { value: 'NO', label: 'No' }
];



// Section 1.
// // Section 1.1
export const hasFinalProductItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' }
];
export const categoriesItems = [
  { value: 'MEDICAL_DEVICE', label: 'Medical device' },
  { value: 'PHARMACEUTICAL', label: 'Pharmaceutical' },
  { value: 'DIGITAL', label: 'Digital (including apps, platforms, software)' },
  { value: 'AI', label: 'Artificial intelligence (AI)' },
  { value: 'EDUCATION', label: 'Education or training of workforce' },
  { value: 'PPE', label: 'Personal protective equipment (PPE)' },
  { value: 'OTHER', label: 'Other', conditional: new FormEngineParameterModel({ id: 'otherCategoryDescription', dataType: 'text', validations: { isRequired: true } }) }
];
export const mainCategoryItems = [
  { value: 'MEDICAL_DEVICE', label: 'Medical device' },
  { value: 'PHARMACEUTICAL', label: 'Pharmaceutical' },
  { value: 'DIGITAL', label: 'Digital (including apps, platforms, software)' },
  { value: 'AI', label: 'Artificial intelligence (AI)' },
  { value: 'EDUCATION', label: 'Education or training of workforce' },
  { value: 'PPE', label: 'Personal protective equipment (PPE)' },
  { value: 'OTHER', label: 'Other', conditional: new FormEngineParameterModel({ id: 'otherMainCategoryDescription', dataType: 'text', validations: { isRequired: true } }) }
];
export const areasItems = [
  { value: 'COVID_19', label: 'COVID-19' },
  { value: 'DATA_ANALYTICS_AND_RESEARCH', label: 'Data, analytics and research' },
  { value: 'DIGITALISING_SYSTEM', label: 'Digitalising the system' },
  { value: 'IMPROVING_SYSTEM_FLOW', label: 'Improving system flow' },
  { value: 'INDEPENDENCE_AND_PREVENTION', label: 'Independence and prevention' },
  { value: 'OPERATIONAL_EXCELLENCE', label: 'Operational excellence' },
  { value: 'PATIENT_ACTIVATION_AND_SELF_CARE', label: 'Patient activation and self-care' },
  { value: 'PATIENT_SAFETY', label: 'Patient safety and quality improvement' },
  { value: 'WORKFORCE_OPTIMISATION', label: 'Workforce resource optimisation' }
];
export const clinicalAreasItems = [
  { value: 'ACUTE', label: 'Acute and emergency services' },
  { value: 'AGEING', label: 'Ageing' },
  { value: 'CANCER', label: 'Cancer' },
  { value: 'CARDIO_ENDOCRINE_METABOLIC', label: 'Cardiovascular, endocrine & metabolic (cardiometabolic)' },
  { value: 'CHILDREN_AND_YOUNG', label: 'Children and young people' },
  { value: 'DISEASE_AGNOSTIC', label: 'Disease agnostic solution' },
  { value: 'GASTRO_KDNEY_LIVER', label: 'Gastroenterology, kidney and liver' },
  { value: 'INFECTION_INFLAMATION', label: 'Infection and inflammation' },
  { value: 'MATERNITY_REPRODUCTIVE_HEALTH', label: 'Maternity and reproductive health' },
  { value: 'MENTAL_HEALTH', label: 'Mental health' },
  { value: 'NEUROLOGY', label: 'Neurology' },
  { value: 'POPULATION_HEALTH', label: 'Population health' },
  { value: 'RESPIRATORY', label: 'Respiratory' },
  { value: 'UROLOGY', label: 'Urology' },
  { value: 'WORKFORCE_AND_EDUCATION', label: 'Workforce and education' }
];
export const careSettingsItems = [
  { value: 'AMBULANCE_OR_PARAMEDIC', label: 'Ambulance or paramedic' },
  { value: 'COMMUNITY', label: 'Community' },
  { value: 'HOSPITAL_INPATIENT', label: 'Hospital - inpatient' },
  { value: 'HOSPITAL_OUTPATIENT', label: 'Hospital - outpatient' },
  { value: 'MENTAL_HEALTH', label: 'Mental health' },
  { value: 'PATIENT_HOME', label: 'Patient\'s home' },
  { value: 'PHARMACY', label: 'Pharmacy' },
  { value: 'PRIMARY_CARE', label: 'Primary care' },
  { value: 'SOCIAL_CARE', label: 'Social care' }
];
export const mainPurposeItems = [
  { value: 'PREVENT_CONDITION', label: 'Preventing a condition or symptom from happening or worsening' },
  { value: 'PREDICT_CONDITION', label: 'Predicting the occurence of a condition or symptom' },
  { value: 'DIAGNOSE_CONDITION', label: 'Diagnosing a condition' },
  { value: 'MONITOR_CONDITION', label: 'Monitoring a condition, treatment or therapy' },
  { value: 'PROVIDE_TREATMENT', label: 'Providing treatment or therapy' },
  { value: 'MANAGE_CONDITION', label: 'Managing a condition' },
  { value: 'ENABLING_CARE', label: 'Enabling care, services or communication' }
];
export const supportTypesItems = [
  { value: 'ASSESSMENT', label: 'Adoption and health technology assessment' },
  { value: 'PRODUCT_MIGRATION', label: 'Bringing my product to or from the UK' },
  { value: 'CLINICAL_TESTS', label: 'Clinical trials and testing' },
  { value: 'COMMERCIAL', label: 'Commercial support and advice' },
  { value: 'PROCUREMENT', label: 'Procurement' },
  { value: 'DEVELOPMENT', label: 'Product development and regulatory advice' },
  { value: 'EVIDENCE_EVALUATION', label: 'Real-world evidence and evaluation' },
  { value: 'FUNDING', label: 'Understanding funding channels' },
  { value: '', label: 'SEPARATOR' },
  { value: 'INFORMATION', label: 'I\'m only looking for information right now' }
];

// // Section 1.2
export const hasProblemTackleKnowledgeItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NOT_YET', label: 'Not yet' },
  { value: 'NOT_SURE', label: 'I\'m not sure' }
];


// Section 2
// // Section 2.1
export const hasSubgroupsItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' },
  { value: 'NOT_RELEVANT', label: 'Not relevant' }
];

// // Section 2.2
export const hasBenefitsItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NOT_YET', label: 'Not yet' },
  { value: 'NOT_SURE', label: 'Not sure' }
];

// // Section 2.3
export const hasEvidenceItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'IN_PROGRESS', label: 'In progress' },
  { value: 'NOT_YET', label: 'Not yet' }
];


// Section 3
// // Section 3.1
export const hasMarketResearchItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'IN_PROGRESS', label: 'I\'m currently doing market research' },
  { value: 'NOT_YET', label: 'Not yet' }
];

// // Section 3.2
export const hasPatentsItems = [
  { value: 'HAS_AT_LEAST_ONE', label: 'I have one or more patents' },
  { value: 'APPLIED_AT_LEAST_ONE', label: 'I have applied for one or more patents' },
  { value: 'HAS_NONE', label: 'I don\'t have any patents, but believe I have freedom to operate' }
];
export const hasOtherIntellectualItems = [
  { value: 'YES', label: 'Yes', conditional: new FormEngineParameterModel({ id: 'otherIntellectual', dataType: 'text', validations: { isRequired: true } }) },
  { value: 'NO', label: 'No' }
];


// Section 4
// // Section 4.1
export const hasRegulationKnowledgeItems = [
  { value: 'YES_ALL', label: 'Yes, I know all of them' },
  { value: 'YES_SOME', label: 'Yes, I know some of them' },
  { value: 'NO', label: 'No' },
  { value: 'NOT_RELEVANT', label: 'Not relevant' }
];
export const standardsTypeItems = [
  { value: 'CE_UKCA_NON_MEDICAL', label: 'CE/UKCA Non-medical device' },
  { value: 'CE_UKCA_CLASS_I', label: 'CE/UKCA Class I medical device' },
  { value: 'CE_UKCA_CLASS_II_A', label: 'CE/UKCA Class IIa medical device' },
  { value: 'CE_UKCA_CLASS_II_B', label: 'CE/UKCA Class IIb medical device' },
  { value: 'CE_UKCA_CLASS_III', label: 'CE/UKCA Class III medical device' },
  { value: 'DTAC', label: 'Digital Technology Assessment Criteria (DTAC)' },
  { value: 'OTHER', label: 'Other', conditional: new FormEngineParameterModel({ id: 'otherRegulationDescription', dataType: 'text', validations: { isRequired: true } }) }
];
export const standardsHasMetItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'IN_PROGRESS', label: 'I\'m in the process of gaining approval' },
  { value: 'NOT_YET', label: 'Not yet' },
];


// Section 5
// // Section 5.1
export const hasUKPathwayKnowledgeItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' }
];
export const innovationPathwayKnowledgeItems = [
  { value: 'PATHWAY_EXISTS_AND_CHANGED', label: 'There is a pathway, and my innovation changes it' },
  { value: 'PATHWAY_EXISTS_AND_FITS', label: 'There is a pathway, and my innovation fits in it' },
  { value: 'NO_PATHWAY', label: 'There is no current care pathway' }
];
export const carePathwayItems = [
  { value: 'ONLY_OPTION', label: 'The only option, or first of its kind' },
  { value: 'BETTER_OPTION', label: 'A better option to those that already exist' },
  { value: 'EQUIVALENT_OPTION', label: 'An equivalent option to those that already exist' },
  { value: 'FIT_LESS_COSTS', label: 'Fit for purpose and costs less' },
  { value: 'NO_KNOWLEDGE', label: 'I don\'t know' }
];

// // Section 5.2
export const hasTestsItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'IN_PROCESS', label: 'I\'m in the process of testing with users' },
  { value: 'NOT_YET', label: 'Not yet' }
];


// Section 6
// // Section 6.1
export const hasCostKnowledgeItems = [
  { value: 'DETAILED_ESTIMATE', label: 'Yes, I have a detailed estimate' },
  { value: 'ROUGH_IDEA', label: 'Yes, I have a rough idea' },
  { value: 'NO', label: 'No' }
];
export const patientRangeItems = [
  { value: 'UP_10000', label: 'Up to 10,000 per year' },
  { value: 'BETWEEN_10000_500000', label: '10,000 to half a million per year' },
  { value: 'MORE_THAN_500000', label: 'More than half a million per year' },
  { value: 'NOT_SURE', label: 'I\'m not sure' },
  { value: 'NOT_RELEVANT', label: 'Not relevant to my innovation' }
];

// // Section 6.2
export const costComparisonItems = [
  { value: 'CHEAPER', label: 'My innovation is cheaper to purchase' },
  { value: 'COSTS_MORE_WITH_SAVINGS', label: 'My innovation costs more to purchase but has greater benefits that will lead to overall cost savings' },
  { value: 'COSTS_MORE', label: 'My innovation costs more to purchase and has greater benefits but will lead to higher costs overall' },
  { value: 'NOT_SURE', label: 'I\'m not sure' }
];


// Section 7
// // Section 7.1
export const hasRevenueModelItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' }
];
export const revenuesItems = [
  { value: 'ADVERTISING', label: 'Advertising' },
  { value: 'DIRECT_PRODUCT_SALES', label: 'Direct product sales' },
  { value: 'FEE_FOR_SERVICE', label: 'Fee for service' },
  { value: 'LEASE', label: 'Lease' },
  { value: 'SALES_OF_CONSUMABLES_OR_ACCESSORIES', label: 'Sales of consumables or accessories' },
  { value: 'SUBSCRIPTION', label: 'Subscription' },
  {
    value: 'OTHER', label: 'Other', conditional: new FormEngineParameterModel({ id: 'otherRevenueDescription', dataType: 'text', validations: { isRequired: true } })
  }
];
export const hasFundindItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' },
  { value: 'NOT_RELEVANT', label: 'Not relevant' }
];


// Section 8
// // Section 8.1
export const hasDeployPlanItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' }
];

export const hasResourcesToScaleItems = [
  { value: 'YES', label: 'Yes' },
  { value: 'NO', label: 'No' },
  { value: 'NOT_SURE', label: 'I\'m not sure' }
];
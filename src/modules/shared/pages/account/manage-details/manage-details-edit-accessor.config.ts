
import { AuthenticationModel } from '@modules/stores';

import { FormEngineModel, SummaryParsingType, WizardEngineModel } from '@modules/shared/forms';


// Types.
type InboundPayloadType = Required<AuthenticationModel>['user'];

type StepPayloadType = {
  displayName: string;
  // mobilePhone?: string;
};

type OutboundPayloadType = {
  displayName: string;
  // mobilePhone?: string;
};


export const ACCOUNT_DETAILS_ACCESSOR: WizardEngineModel = new WizardEngineModel({
  steps: [
    new FormEngineModel({
      label: 'What\'s your name?',
      parameters: [{ id: 'displayName', dataType: 'text', label: 'Full name', validations: { isRequired: true } }]
    }),

    // new FormEngineModel({
    //   label: 'Phone number',
    //   parameters: [{ id: 'mobilePhone', dataType: 'text' }]
    // }),

  ],
  inboundParsing: (data: InboundPayloadType) => inboundParsing(data),
  outboundParsing: (data: StepPayloadType) => outboundParsing(data),
  summaryParsing: (data: StepPayloadType) => summaryParsing(data)
});


function inboundParsing(data: InboundPayloadType): StepPayloadType {

  return {
    displayName: data.displayName,
    // mobilePhone?: string;
  };

}


function outboundParsing(data: StepPayloadType): OutboundPayloadType {

  return {
    displayName: data.displayName,
    // mobilePhone: data.mobilePhone,
  };

}

function summaryParsing(data: StepPayloadType): SummaryParsingType[] {

  const toReturn: SummaryParsingType[] = [];

  toReturn.push(
    { label: 'Name', value: data.displayName, editStepNumber: 1 }
    // { label: 'Phone', value: data.mobilePhone, editStepNumber: 2 },
  );

  return toReturn;

}
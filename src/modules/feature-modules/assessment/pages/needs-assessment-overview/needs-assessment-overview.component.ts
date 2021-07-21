import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoreComponent } from '@app/base';
import { RoutingHelper } from '@modules/core';
import { NEEDS_ASSESSMENT_QUESTIONS } from '@modules/stores/innovation/config/needs-assessment-constants.config';

import { getInnovationNeedsAssessmentEndpointOutDTO } from '@modules/feature-modules/assessment/services/assessment.service';
import { maturityLevelItems, yesPartiallyNoItems } from '@modules/stores/innovation/sections/catalogs.config';

import { InnovationDataType } from '@modules/feature-modules/accessor/resolvers/innovation-data.resolver';

import { AssessmentService } from '../../services/assessment.service';


@Component({
  selector: 'app-assessment-pages-innovation-needs-assessment-overview',
  templateUrl: './needs-assessment-overview.component.html'
})
export class InnovationNeedsAssessmentOverviewComponent extends CoreComponent implements OnInit {

  innovationId: string;
  assessmentId: string;
  innovation: InnovationDataType;

  assessment: getInnovationNeedsAssessmentEndpointOutDTO['assessment'] & { organisationsNames: string[] } | undefined;

  innovationSummary: { label?: string; value: null | string; comment: string }[] = [];
  innovatorSummary: { label?: string; value: null | string; comment: string }[] = [];

  summaryAlert: { type: '' | 'error' | 'success', title: string, message: string };

  constructor(
    private activatedRoute: ActivatedRoute,
    private assessmentService: AssessmentService
  ) {

    super();

    this.innovationId = this.activatedRoute.snapshot.params.innovationId;
    this.assessmentId = this.activatedRoute.snapshot.params.assessmentId;
    this.innovation = RoutingHelper.getRouteData(this.activatedRoute).innovationData;
    this.summaryAlert = { type: '', title: '', message: '' };

  }


  ngOnInit(): void {

    switch (this.activatedRoute.snapshot.queryParams.alert) {
      case 'needsAssessmentSubmited':
        this.summaryAlert = {
          type: 'success',
          title: 'Needs assessment successfully completed',
          message: ''
        };
        break;
      default:
        this.summaryAlert = { type: '', title: '', message: '' };
        break;
    }

    this.assessmentService.getInnovationNeedsAssessment(this.innovationId, this.assessmentId).subscribe(
      response => {

        this.assessment = { ...response.assessment, organisationsNames: response.assessment.organisations.map(item => item.name) };

        const maturityLevelIndex = (maturityLevelItems.findIndex(item => item.value === response.assessment.maturityLevel) || 0) + 1;

        this.innovationSummary = [
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovation[1].label,
            value: `${maturityLevelIndex} / ${maturityLevelItems.length}`,
            comment: `<ul class="progressbar nhsuk-u-padding-top-2 nhsuk-u-padding-bottom-1">
            <li class="progressbar-item${maturityLevelIndex >= 1 ? ' active' : ''}" style="width: 10%"></li>
            <li class="progressbar-item${maturityLevelIndex >= 2 ? ' active' : ''}" style="width: 10%"></li>
            <li class="progressbar-item${maturityLevelIndex === 3 ? ' active' : ''}" style="width: 10%"></li>
          </ul>${maturityLevelItems.find(item => item.value === response.assessment.maturityLevel)?.label}`
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovation[2].label,
            value: yesPartiallyNoItems.find(item => item.value === response.assessment.hasRegulatoryApprovals)?.label || '',
            comment: response.assessment.hasRegulatoryApprovalsComment || ''
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovation[3].label,
            value: yesPartiallyNoItems.find(item => item.value === response.assessment.hasEvidence)?.label || '',
            comment: response.assessment.hasEvidenceComment || ''
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovation[4].label,
            value: yesPartiallyNoItems.find(item => item.value === response.assessment.hasValidation)?.label || '',
            comment: response.assessment.hasValidationComment || ''
          }
        ];

        this.innovatorSummary = [
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovator[0].label,
            value: maturityLevelItems.find(item => item.value === response.assessment.hasProposition)?.label || '',
            comment: response.assessment.hasPropositionComment || ''
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovator[1].label,
            value: maturityLevelItems.find(item => item.value === response.assessment.hasCompetitionKnowledge)?.label || '',
            comment: response.assessment.hasCompetitionKnowledgeComment || ''
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovator[2].label,
            value: yesPartiallyNoItems.find(item => item.value === response.assessment.hasImplementationPlan)?.label || '',
            comment: response.assessment.hasImplementationPlanComment || ''
          },
          {
            label: NEEDS_ASSESSMENT_QUESTIONS.innovator[3].label,
            value: yesPartiallyNoItems.find(item => item.value === response.assessment.hasScaleResource)?.label || '',
            comment: response.assessment.hasScaleResourceComment || ''
          }
        ];

      },
      error => {
        this.logger.error(error);
      }
    );

  }

}

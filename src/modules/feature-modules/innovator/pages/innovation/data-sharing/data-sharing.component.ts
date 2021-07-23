import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { CoreComponent } from '@app/base';
import { INNOVATION_SUPPORT_STATUS } from '@modules/stores/innovation/innovation.models';

import { InnovatorService } from '@modules/feature-modules/innovator/services/innovator.service';
import { getOrganisationUnitsSupportStatusDTO, OrganisationsService } from '@modules/shared/services/organisations.service';


@Component({
  selector: 'app-innovator-pages-innovation-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss'],
})
export class InnovationDataSharingComponent extends CoreComponent implements OnInit {

  innovationId: string;

  innovationSupportStatus = this.stores.innovation.INNOVATION_SUPPORT_STATUS;

  organisations: {
    info: getOrganisationUnitsSupportStatusDTO & { status?: keyof typeof INNOVATION_SUPPORT_STATUS; };
    shared: boolean;
    showHideStatus: 'hidden' | 'opened' | 'closed';
    showHideText: null | string;
  }[] = [];

  organisationInfoUrl: string;

  summaryAlert: { type: '' | 'success' | 'error' | 'warning', title: string, message: string };

  constructor(
    private activatedRoute: ActivatedRoute,
    private organisationsService: OrganisationsService,
    private innovatorService: InnovatorService,
  ) {
    super();

    this.innovationId = this.activatedRoute.snapshot.params.innovationId;
    this.organisationInfoUrl = `${this.stores.environment.BASE_URL}/about-the-service/who-we-are`;
    this.summaryAlert = { type: '', title: '', message: '' };

    switch (this.activatedRoute.snapshot.queryParams.alert) {
      case 'sharingUpdateSuccess':
        this.summaryAlert = {
          type: 'success',
          title: 'Data sharing preferences',
          message: 'Your data sharing preferences were changed.'
        };
        break;
      case 'sharingUpdateError':
        this.summaryAlert = {
          type: 'error',
          title: 'An error occured when updating data sharing preferences',
          message: 'Please, try again or contact us for further help'
        };
        break;
    }
  }


  ngOnInit(): void {

    // TODO: SPRINT 13.
    // Add here the calls necessary to draw the cards! That's what missing!
    forkJoin([
      this.organisationsService.getOrganisationUnits(),
      this.innovatorService.getInnovationShares(this.innovationId),
      this.innovatorService.getInnovationSupports(this.innovationId, false),
    ]).subscribe(([organisationUnits, innovationShares, organisationUnitsSupportStatus]) => {

      this.organisations = organisationUnits.map(organisation => {

        if (organisation.organisationUnits.length === 1) {
          return {
            info: {
              id: organisation.id,
              name: organisation.name,
              acronym: organisation.acronym,
              organisationUnits: [],
              status: innovationShares.find(i => i.id === organisation.id)?.status || 'UNASSIGNED',
            },
            shared: (innovationShares.findIndex(i => i.id === organisation.id) > -1),
            showHideStatus: 'hidden',
            showHideText: null
          };
        } else {
          return {
            info: {
              id: organisation.id,
              name: organisation.name,
              acronym: organisation.acronym,
              organisationUnits: organisation.organisationUnits.map(org => ({
                ...org,
                status: organisationUnitsSupportStatus.find(o => o.organisationUnit.id === org.id)?.status || 'UNASSIGNED'
              }))
            },
            shared: (innovationShares.findIndex(i => i.id === organisation.id) > -1),
            showHideStatus: 'closed',
            showHideText: organisation.organisationUnits.length === 0 ? null : `Show ${organisation.organisationUnits.length} units`
          };
        }

      });

    });

  }


  onShowHideClicked(organisationId: string): void {

    const organisation = this.organisations.find(i => i.info.id === organisationId);

    switch (organisation?.showHideStatus) {
      case 'opened':
        organisation.showHideStatus = 'closed';
        organisation.showHideText = `Show ${organisation.info.organisationUnits.length} units`;
        break;
      case 'closed':
        organisation.showHideStatus = 'opened';
        organisation.showHideText = `Hide ${organisation.info.organisationUnits.length} units`;
        break;
      default:
        break;
    }

  }

}

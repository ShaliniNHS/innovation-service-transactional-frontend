import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoreComponent } from '@app/base';

import { SectionsSummaryModel } from '@stores-module/innovation/innovation.models';


@Component({
  selector: 'app-innovator-pages-innovations-section-view',
  templateUrl: './section-view.component.html'
})
export class InnovationsSectionViewComponent extends CoreComponent implements OnInit {

  innovationSections: SectionsSummaryModel[] = [];

  innovationSectionStatus = this.stores.innovation.INNOVATION_SECTION_STATUS;
  innovationSectionActionStatus = this.stores.innovation.INNOVATION_SECTION_ACTION_STATUS;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { super(); }


  ngOnInit(): void {

    this.getInnovationSections();

  }


  getInnovationSections(): void {

    this.stores.innovation.getSectionsSummary$(this.activatedRoute.snapshot.params.innovationId).subscribe(
      response => this.innovationSections = response,
      error => this.logger.error(error)
    );

  }

}
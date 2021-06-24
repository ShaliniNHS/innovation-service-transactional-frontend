import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

import { INNOVATION_SUPPORT_STATUS } from '@modules/stores/innovation/innovation.models';

import { AssessmentService } from '../services/assessment.service';

export type InnovationDataType = {
  id: string;
  name: string;
  assessment: {
    id: undefined | string;
  };
  // support: {
  //   id: undefined | string;
  //   status: keyof typeof INNOVATION_SUPPORT_STATUS;
  // }
};


@Injectable()
export class InnovationDataResolver implements Resolve<InnovationDataType> {

  constructor(
    private logger: NGXLogger,
    private assessmentService: AssessmentService
  ) { }


  resolve(route: ActivatedRouteSnapshot): Observable<InnovationDataType> {

    return this.assessmentService.getInnovationInfo(route.params.innovationId).pipe(
      map(
        response => ({
          id: response.summary.id,
          name: response.summary.name,
          assessment: { id: response.assessment?.id },
          // support: {
          //   id: '', //response.support?.id,
          //   status: 'UNNASSIGNED'//response.support?.status || 'UNNASSIGNED'
          // }
        }),
        catchError(error => {
          this.logger.error('Error fetching data innovation data', error);
          return of(false);
        })
      )
    );

  }

}
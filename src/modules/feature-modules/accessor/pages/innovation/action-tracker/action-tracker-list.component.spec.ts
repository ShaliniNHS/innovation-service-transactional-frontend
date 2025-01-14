import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AppInjector, CoreModule } from '@modules/core';
import { StoresModule } from '@modules/stores';
import { AccessorModule } from '@modules/feature-modules/accessor/accessor.module';

import { InnovationActionTrackerListComponent } from './action-tracker-list.component';

import { AccessorService } from '@modules/feature-modules/accessor/services/accessor.service';


describe('FeatureModules/Accessor/Innovation/InnovationActionTrackerListComponent', () => {

  let activatedRoute: ActivatedRoute;

  let accessorService: AccessorService;

  let component: InnovationActionTrackerListComponent;
  let fixture: ComponentFixture<InnovationActionTrackerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        StoresModule,
        AccessorModule
      ]
    });

    AppInjector.setInjector(TestBed.inject(Injector));

    activatedRoute = TestBed.inject(ActivatedRoute);

    accessorService = TestBed.inject(AccessorService);

    activatedRoute.snapshot.params = { innovationId: 'Inno01' };
    activatedRoute.snapshot.data = { innovationData: { id: 'Inno01', name: 'Innovation 01', support: { id: 'Inno01Support01', status: 'ENGAGING' }, assessment: {} } };

  });


  it('should create the component', () => {

    fixture = TestBed.createComponent(InnovationActionTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();

  });


  it('should have initial information loaded', () => {

    const getInnovationActionsListDataMock = {
      openedActions: [{ id: 'ID01', status: 'REQUESTED', name: 'Submit section X', createdAt: '2021-04-16T09:23:49.396Z', notifications: { count: 1 } }],
      closedActions: [{ id: 'ID01', status: 'REQUESTED', name: 'Submit section X', createdAt: '2021-04-16T09:23:49.396Z', notifications: { count: 0 }}]
    };
    accessorService.getInnovationActionsList = () => of(getInnovationActionsListDataMock as any);
    const expected = getInnovationActionsListDataMock.openedActions;

    fixture = TestBed.createComponent(InnovationActionTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.openedActionsList.getRecords()).toEqual(expected);

  });

  it('should NOT have initial information loaded', () => {

    accessorService.getInnovationInfo = () => throwError('error');
    accessorService.getInnovationActionsList = () => throwError('error');
    const expected = [] as any;

    fixture = TestBed.createComponent(InnovationActionTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.openedActionsList.getRecords()).toEqual(expected);

  });

});

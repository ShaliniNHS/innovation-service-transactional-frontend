import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Injector } from '@angular/core';
import { of, throwError } from 'rxjs';

import { AppInjector, CoreModule } from '@modules/core';
import { StoresModule, InnovationStore } from '@modules/stores';
import { InnovatorModule } from '@modules/feature-modules/innovator/innovator.module';

import { InnovationOverviewComponent } from './overview.component';


describe('FeatureModules/Innovator/DashboardComponent', () => {

  let innovationStore: InnovationStore;

  let component: InnovationOverviewComponent;
  let fixture: ComponentFixture<InnovationOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        StoresModule,
        InnovatorModule
      ]
    });

    AppInjector.setInjector(TestBed.inject(Injector));

    innovationStore = TestBed.inject(InnovationStore);

  });

  it('should create the component', () => {

    fixture = TestBed.createComponent(InnovationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();

  });


  it('should have innovation information loaded', () => {

    const responseMock = {
      innovation: { status: 'CREATED' },
      sections: [
        { status: 'NOT_STARTED', isCompleted: false },
        { status: 'DRAFT', isCompleted: false },
        { status: 'SUBMITTED', isCompleted: true }
      ]
    };
    innovationStore.getSectionsSummary$ = () => of(responseMock as any);
    const expected = responseMock.innovation.status;

    fixture = TestBed.createComponent(InnovationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.innovationStatus).toEqual(expected);

  });

  it('should NOT have innovation information loaded', () => {

    innovationStore.getSectionsSummary$ = () => throwError('error');
    const expected = '';

    fixture = TestBed.createComponent(InnovationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.innovationStatus).toEqual(expected);

  });

});
import { Component, Input, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorConnector } from '../base/control-value-accessor.connector';

import { FormEngineHelper } from '../engine/helpers/form-engine.helper';

import { RandomGeneratorHelper } from '@modules/core';

@Component({
  selector: 'theme-form-textarea',
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormTextareaComponent),
    multi: true
  }]

})
export class FormTextareaComponent extends ControlValueAccessorConnector implements OnInit, DoCheck {

  @Input() id?: string;
  @Input() type?: 'text' | 'number' | 'hidden' | 'password';
  @Input() label?: string;
  @Input() description?: string;
  @Input() placeholder?: string;
  @Input() pageUniqueField = true;
  @Input() cssOverride?: string;

  hasError = false;
  errorMessage = '';

  divCssOverride = '';

  // Accessibility.
  get ariaDescribedBy(): null | string {
    let s = '';
    if (this.description) { s += `hint-${this.id}`; }
    if (this.hasError) { s += `${s ? ' ' : ''}error-${this.id}`; }
    return s || null;
  }


  constructor(
    injector: Injector,
    private cdr: ChangeDetectorRef
  ) {

    super(injector);

  }

  ngOnInit(): void {

    this.id = this.id || RandomGeneratorHelper.generateRandom();
    this.type = this.type || 'text';
    this.placeholder = this.placeholder || '';
    // this.cssOverride = this.cssOverride || 'nhsuk-u-padding-top-4';


    this.divCssOverride = this.cssOverride || ''; // nhsuk-u-padding-top-4
  }

  ngDoCheck(): void {

    this.hasError = (this.fieldControl.invalid && (this.fieldControl.touched || this.fieldControl.dirty));
    this.errorMessage = this.hasError ? FormEngineHelper.getValidationMessage(this.fieldControl.errors) : '';
    this.cdr.detectChanges();

  }

}

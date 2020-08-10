import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

type FormControlConfig = [ string | number, { validators: ValidatorFn[] } ];

const myRequiredValidator = (control: AbstractControl) => {

  if (control.value == null || String(control.value).length === 0) {
    return {
      // validation for myRequired failed
      myRequired: true,
    };
  }

  // control is valid
  return null;
};

const isEmpty = (value: any) => {
  return (value == null || String(value).length === 0);
};

const cityStateZipCodeValidator = (control: AbstractControl) => {

  const city = control.get('city').value;
  const state = control.get('state').value;
  const zipcode = control.get('zipcode').value;

  if ((!isEmpty(city) || !isEmpty(state)) && !isEmpty(zipcode)) {
    return {
      cityStateZipCode: 'Please enter only a city and state or a zipcode.',
    };
  }

  if ((isEmpty(city) || isEmpty(state)) && isEmpty(zipcode)) {
    return {
      cityStateZipCode: 'Please enter a city and state or a zipcode.',
    };
  }

  return null;

};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-app';

  firstName = '';

  firstName2 = '';

  firstName2Input = new FormControl(this.firstName2);

  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  // Lifecycle Method
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.firstName = 'Bob';
    // }, 4000);

    // this.addressForm = new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   zipcode: new FormControl(''),
    // });

    this.contactForm = this.fb.group({
      fullName: [ '', { validators: [ myRequiredValidator, Validators.required ] } ],
      addressForm: this.fb.group(
        {
          street: this.formControlReqMinLen('', 3),
          city: '',
          state: '',
          zipcode: '',
        },
        {
          validators: [ cityStateZipCodeValidator ],
        },
      ),
    });

  }

  showCtrlErrorMsg(controlName: string): boolean {

    const fullname = this.contactForm.get(controlName);

    return fullname.invalid && fullname.touched;
  }

  formControlReqMinLen(initialValue = '', minLength: number): FormControlConfig {
    return [ initialValue, { validators: [ Validators.required, Validators.minLength(minLength) ] } ];
  }

  get addressFormHasErrors() {
    return this.contactForm.get('addressForm').errors != null;
  }

  get addressFormErrorMessages(): string[] {

    return Object.keys(this.contactForm.get('addressForm').errors).map(errorKey => {

      return this.contactForm.get('addressForm').errors[errorKey];

    });
  }

  doSaveContact(): void {

    this.firstName2 = this.firstName2Input.value;

    console.log(this.contactForm.value);

  }
}

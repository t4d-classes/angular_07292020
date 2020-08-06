import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

type FormControlConfig = [ string | number, { validators: ValidatorFn[] } ];

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
      fullName: [ '', { validators: [ Validators.required ] } ],
      addressForm: this.fb.group({
        street: this.formControlReqMinLen('', 3),
        city: '',
        zipcode: '',
      }),
    });

  }

  showCtrlErrorMsg(controlName: string): boolean {

    const fullname = this.contactForm.get(controlName);

    return fullname.invalid && fullname.touched;
  }

  formControlReqMinLen(initialValue = '', minLength: number): FormControlConfig {
    return [ initialValue, { validators: [ Validators.required, Validators.minLength(minLength) ] } ];
  }

  doSaveContact(): void {

    this.firstName2 = this.firstName2Input.value;

    console.log(this.contactForm.value);

  }
}

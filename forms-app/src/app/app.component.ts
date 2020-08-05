import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
      fullName: '',
      addressForm: this.fb.group({
        street: '',
        city: '',
        zipcode: '',
      }),
    });

  }

  doSaveContact(): void {

    this.firstName2 = this.firstName2Input.value;

    console.log(this.contactForm.value);

  }
}

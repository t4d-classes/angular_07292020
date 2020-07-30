import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm: FormGroup;

  @Output()
  submitColor = new EventEmitter<string>();

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      colorName: '',
    });
  }

  doSubmitColor(): void {
    this.submitColor.emit(this.colorForm.value.colorName);
  }


}

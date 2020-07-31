import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Color } from '../../models/Color';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  colorForm: FormGroup;

  @Output()
  submitColor = new EventEmitter<Color>();

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      colorName: '',
      colorHexcode: '',
    });
  }

  doSubmitColor(): void {
    this.submitColor.emit({
      name: this.colorForm.value.colorName,
      hexcode: this.colorForm.value.colorHexcode,
    });
  }


}

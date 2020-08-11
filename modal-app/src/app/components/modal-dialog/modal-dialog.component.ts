import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ModalDialogMode } from '../../models/ModalDialogMode';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {

  @Input()
  mode = ModalDialogMode.Confirm;

  @Output()
  confirm = new EventEmitter<void>();

  @Output()
  yes = new EventEmitter<void>();

  @Output()
  no = new EventEmitter<void>();
}

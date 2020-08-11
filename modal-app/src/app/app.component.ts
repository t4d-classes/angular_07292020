import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-app';

  entryName = 'Ford Fusion Hybrid!';

  showConfirmDeleteCarModal = false;

  // display the model
  doConfirmDeleteCar(): void {
    this.showConfirmDeleteCarModal = true;
  }

  // yes, do the delete
  doDeleteCar(): void {
    this.showConfirmDeleteCarModal = false;
    console.log('deleting car ' + this.entryName);
  }

  // no, do not do the delete
  doCloseConfirmDeleteCar(): void {
    this.showConfirmDeleteCarModal = false;
  }
}

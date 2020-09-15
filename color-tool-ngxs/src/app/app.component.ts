import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { AppStore, AppendColor } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(AppStore.colors) colors$: Observable<string[]>;

  newColorInput = new FormControl();

  constructor(private appStore: Store) {}

  addColor() {
    this.appStore.dispatch(new AppendColor(this.newColorInput.value));
  }

}

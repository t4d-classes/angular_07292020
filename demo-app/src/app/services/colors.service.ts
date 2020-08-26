import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/Color';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private httpClient: HttpClient) { }

  all(): Promise<Color[]> {
    return this.httpClient.get<Color[]>('http://localhost:4250/colors').toPromise();
  }

  append(color: Color): Promise<Color> {
    return this.httpClient.post<Color>(
      'http://localhost:4250/colors',
      color,
    ).toPromise();
  }

  // Add a remove method which receives the id of the color to delete.
  // DELETE http://localhost:4250/colors/3

  // Then use the remove method in AppComponent to remove the item from the
  // REST API and refresh the list
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor(private http: HttpClient) {}

  beers(brewedBefore?: string): Promise<any> {
    let params = '';

    if (brewedBefore) {
      params += 'brewed_before=' + brewedBefore;
    }

    return this.http.get(environment.endpoint + 'beers?' + params).toPromise();
  }
}

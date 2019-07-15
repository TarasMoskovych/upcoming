import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { origin } from './../configs';
import { CoreModule } from './../core.module';

import { Movies } from 'src/app/shared/models';

@Injectable({
  providedIn: CoreModule
})
export class DataService {

  constructor(
    @Inject(origin) private baseUrl: string,
    private http: HttpClient,
  ) { }

  getPopular(page: string = '1') {
    return this.http.get(`${this.baseUrl}/movie/popular`, {
      params: new HttpParams({
        fromObject: {
          page, language: 'en-US',
        }
      })
    }).pipe(delay(800), map((data: Movies) => data.results));
  }

  getUpcoming(page: string = '1') {
    return this.http.get(`${this.baseUrl}/movie/upcoming`, {
      params: new HttpParams({
        fromObject: {
          page, language: 'en-US',
        }
      })
    }).pipe(delay(800), map((data: Movies) => data.results));
  }
}

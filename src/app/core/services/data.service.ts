import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { origin } from './../configs';
import { CoreModule } from './../core.module';

import { Movies, MovieDetails, Genre, Genres, Images, Videos } from 'src/app/shared/models';

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

  getGenres(): Observable<Genre[]> {
    return this.http.get(`${this.baseUrl}/genre/movie/list`)
      .pipe(map((data: Genres) => data.genres));
  }

  getByParams(page: string = '1', options: any) {
    return this.http.get(`${this.baseUrl}/discover/movie`, {
      params: new HttpParams({
        fromObject: Object.assign(options, { page })
      })
    }).pipe(map((data: Movies) => data.results));
  }

  getByQuery(page: string = '1', options: any) {
    return this.http.get(`${this.baseUrl}/search/movie`, {
      params: new HttpParams({
        fromObject: Object.assign(options, { page })
      })
    }).pipe(map((data: Movies) => data.results));
  }

  getById(id: number) {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`);
  }

  getImages(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/images`)
      .pipe(map((images: Images) => images.backdrops));
  }

  getVideos(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos`)
      .pipe(map((videos: Videos) => videos.results));
  }
}

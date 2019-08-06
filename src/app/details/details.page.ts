import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './../core/services';
import { MovieDetails, Image, Video } from '../shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;
  movie: MovieDetails;

  images$: Observable<Image[]>;
  videos$: Observable<Video[]>;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.id = +this.router.snapshot.paramMap.get('id');
    this.getMovie();
    this.getImages();
    this.getVideos();
  }

  private getMovie() {
    this.dataService.getById(this.id)
      .subscribe((movie: MovieDetails) => {
        this.movie = movie;
      });
  }

  private getImages() {
    this.images$ = this.dataService.getImages(this.id);
  }

  private getVideos() {
    this.videos$ = this.dataService.getVideos(this.id);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';

import { DataService } from './../core/services';
import { MovieDetails, Image, Video } from '../shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @ViewChild(IonSlides, {  static: false }) slides: IonSlides;

  id: number;

  images$: Observable<Image[]>;
  movie$: Observable<MovieDetails>;
  videos$: Observable<Video[]>;

  isImageLoaded = true;
  loadedImgs: number[] = [];

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

  onImgDidLoad(idx: number) {
    this.loadedImgs.push(idx);
    this.isImageLoaded = true;
  }

  onSlideWillChange() {
    this.isImageLoaded = false;
    this.slides.getActiveIndex().then((idx: number) => this.isImageLoaded = this.loadedImgs.includes(idx));
  }

  private getMovie() {
    this.movie$ = this.dataService.getById(this.id);
  }

  private getImages() {
    this.images$ = this.dataService.getImages(this.id);
  }

  private getVideos() {
    this.videos$ = this.dataService.getVideos(this.id);
  }
}

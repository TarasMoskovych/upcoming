import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Observable } from 'rxjs';

import { DataService, ImageService } from './../core/services';
import { MovieDetails, Image, Video } from '../shared/models';
import { fadeOut } from '../shared/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  animations: [fadeOut]
})
export class DetailsPage implements OnInit {
  @ViewChild(IonSlides, {  static: false }) slides: IonSlides;

  id: number;

  images$: Observable<Image[]>;
  movie$: Observable<MovieDetails>;
  videos$: Observable<Video[]>;

  isImageLoaded = true;
  isPosterLoaded = false;
  loadedImgs: number[] = [];

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    private iab: InAppBrowser,
    public imageService: ImageService,
    private youtube: YoutubeVideoPlayer
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

  onPosterDidLoad() {
    this.isPosterLoaded = true;
  }

  onSlideWillChange() {
    this.isImageLoaded = false;
    this.slides.getActiveIndex().then((idx: number) => this.isImageLoaded = this.loadedImgs.includes(idx));
  }

  onVisitWebsite(url: string) {
    this.iab.create(url, '_system').close();
  }

  onVideoPlay(key: string) {
    // this.youtube.openVideo(key);
    window.open(`https://www.youtube.com/watch?v=${key}`, '_blank');
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

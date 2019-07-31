import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../core/services/data.service';
import { MovieDetails } from '../shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: number;
  movie: MovieDetails;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.id = +this.router.snapshot.paramMap.get('id');
    this.getMovie();
  }

  private getMovie() {
    this.dataService.getById(this.id)
      .subscribe((movie: MovieDetails) => {
        this.movie = movie;
      });
  }
}

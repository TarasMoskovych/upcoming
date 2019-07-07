import { Component } from '@angular/core';

import { DataService } from './../core/services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService) {
    this.dataService.getPopular().subscribe(data => {
      console.log(data);
    });
  }

}

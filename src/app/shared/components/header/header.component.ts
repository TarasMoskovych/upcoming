import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() togglePopular = new EventEmitter<boolean>();

  isPopular = true;

  constructor() { }

  ngOnInit() {}

  openFavorites() {}
  openGenres() {}
  openSearchBar() {}

  onToggle() {
    this.isPopular = !this.isPopular;
    this.togglePopular.emit(this.isPopular);
  }

}

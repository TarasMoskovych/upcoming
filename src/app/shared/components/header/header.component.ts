import { Component, Output, EventEmitter } from '@angular/core';

import { HeaderService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() togglePopular = new EventEmitter<boolean>();

  isPopular = true;
  title$ = this.headerService.channel$;

  constructor(private headerService: HeaderService) { }

  openGenres() {}
  openSearchBar() {}

  onToggle() {
    this.isPopular = !this.isPopular;
    this.togglePopular.emit(this.isPopular);
  }

}

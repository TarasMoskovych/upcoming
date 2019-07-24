import { Component, Output, EventEmitter, Input } from '@angular/core';

import { HeaderService, ModalService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() genresPage = false;
  @Output() togglePopular = new EventEmitter<boolean>();
  @Output() openGenres = new EventEmitter<boolean>();

  isPopular = true;
  title$ = this.headerService.channel$;

  constructor(private headerService: HeaderService, private modalService: ModalService) { }

  onOpenGenres() {
    this.openGenres.emit(true);
  }

  openSearchBar() {}

  onToggle() {
    this.isPopular = !this.isPopular;
    this.togglePopular.emit(this.isPopular);
  }

  onGoBack() {
    this.closeGenresModal();
  }

  onApplyGenres() {
    this.closeGenresModal();
  }

  private closeGenresModal() {
    this.modalService.dismiss('genres');
  }
}

import { Component, Output, EventEmitter, Input } from '@angular/core';


import { HeaderService, ModalService } from 'src/app/core/services';
import { slideLeft } from '../../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideLeft],
})
export class HeaderComponent {
  @Input() genresPage = false;
  @Output() togglePopular = new EventEmitter<boolean>();
  @Output() openGenres = new EventEmitter<boolean>();
  @Output() searchItems = new EventEmitter<string>();

  isPopular = true;
  showSearchBar = false;
  title$ = this.headerService.channel$;

  constructor(private headerService: HeaderService, private modalService: ModalService) { }

  onOpenGenres() {
    this.openGenres.emit(true);
  }

  onToggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

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

  onSearch(value: string) {
    this.searchItems.emit(value);
  }

  private closeGenresModal() {
    this.modalService.dismiss('genres');
  }
}

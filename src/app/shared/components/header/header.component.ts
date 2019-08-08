import { Component, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { HeaderService, ModalService } from 'src/app/core/services';
import { slideLeft } from '../../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideLeft],
})
export class HeaderComponent {
  @Input() staticTitle: string;
  @Input() showLogo = true;
  @Input() showApplyButton = false;
  @Input() genresPage = false;
  @Input() scrollArea: ElementRef;
  @Output() togglePopular = new EventEmitter<boolean>();
  @Output() openGenres = new EventEmitter<boolean>();
  @Output() searchItems = new EventEmitter<string>();
  @Output() clear = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<string>();
  @ViewChild('searchBar', { static: false }) searchBar: IonSearchbar;

  isPopular = true;
  showSearchBar = false;
  title$ = this.headerService.channel$;

  constructor(private headerService: HeaderService, private modalService: ModalService, private keyboard: Keyboard) { }

  onOpenGenres() {
    this.openGenres.emit(true);
  }

  onToggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  onToggleSearchBarDone() {
    if (this.showSearchBar && this.searchBar) {
      this.searchBar.setFocus();
    }
  }

  onToggle() {
    this.isPopular = !this.isPopular;
    this.togglePopular.emit(this.isPopular);
  }

  onGoBack() {
    this.closeGenresModal();
    this.keyboard.hide();
  }

  onApplyGenres() {
    this.closeGenresModal();
  }

  onSearch(value: string) {
    this.searchItems.emit(value);
    this.keyboard.hide();
  }

  onChange(value: string) {
    this.change.emit(value);
  }

  onCancel() {
    this.onToggleSearchBar();
    this.clear.emit(true);
  }

  private closeGenresModal() {
    this.modalService.dismiss('genres');
  }
}

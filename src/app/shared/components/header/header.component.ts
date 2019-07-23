import { Component, Output, EventEmitter, Input } from '@angular/core';

import { HeaderService, ModalService } from 'src/app/core/services';
import { Genre } from 'src/app/shared/models';
import { first } from 'rxjs/operators';

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
    this.modalService.dismiss();
  }

  onApplyGenres() {
    this.modalService.dismiss();

    this.headerService.genres$.pipe(first()).subscribe((genres: Genre[]) => {
      this.headerService.dispatchApplyChanges(genres);
    });
  }
}

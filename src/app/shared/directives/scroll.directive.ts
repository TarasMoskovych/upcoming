import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomController, IonContent } from '@ionic/angular';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {
  @Input() scrollArea: IonContent;

  private hidden = false;
  private height: string;
  private nativeElement: HTMLElement;
  private triggerDistance = 200;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    this.initStyles();

    if (!this.scrollArea) { return; }

    this.scrollArea.ionScroll.subscribe(scrollEvent => {
      const delta = scrollEvent.detail.deltaY;

      if (scrollEvent.detail.currentY === 0 && this.hidden) {
        this.show();
      } else if (!this.hidden && delta > this.triggerDistance) {
        this.hide();
      } else if (this.hidden && delta < -this.triggerDistance) {
        this.show();
      }
    });
  }

  initStyles() {
    this.nativeElement = this.element.nativeElement;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.nativeElement, 'transition', '0.2s linear');
      this.height = getComputedStyle(this.nativeElement).height;
    });
  }

  hide() {
    this.domCtrl.write(() => this.renderer.setStyle(this.nativeElement, 'height', 0));
    this.hidden = true;
  }

  show() {
    this.domCtrl.write(() => this.renderer.setStyle(this.nativeElement, 'height', this.height));
    this.hidden = false;
  }
}

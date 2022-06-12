import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {delay, fromEvent, map, mapTo, repeat, share, switchMap, takeUntil} from 'rxjs';
import {UserInterface} from '@app-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  height = 0;
  width = 0;
  mouseX = 0;
  mouseY = 0;
  @Input() cardBgImage: string = '';
  @Input() user?: UserInterface;
  @ViewChild('card', {static: true}) card: ElementRef;
  cardStyling = this.cardStyle();
  isShowingUserId = false;

  get mousePX(): number {
    return this.mouseX / this.width;
  }

  get mousePY(): number {
    return this.mouseY / this.height;
  }

  cardStyle(): {transform: string} {
    return this.transformStyle();
  }

  cardBgTransform(): {transform: string} {
    return this.transformStyle();
  }

  private transformStyle(): {transform: string} {
    const tX = this.mousePX * -50;
    const tY = this.mousePY * -30;
    return {transform: `rotateY(${tX}deg) rotateX(${tY}deg)`};
  }

  get nativeElement(): HTMLElement {
    return this.card.nativeElement;
  }

  ngOnInit(): void {
    const mouseMove$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mousemove');
    const mouseLeave$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseleave').pipe(
      delay(100),
      mapTo({mouseX: 0, mouseY: 0}),
      share()
    );
    const mouseEnter$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$));

    mouseEnter$
      .pipe(
        switchMap(() => mouseMove$),
        map((e: any) => ({
          mouseX: e.pageX - this.nativeElement.offsetLeft - this.width / 2,
          mouseY: e.pageY - this.nativeElement.offsetTop - this.height / 2,
        })),
        repeat()
      )
      .subscribe((e: any) => {
        this.mouseX = e.mouseX;
        this.mouseY = e.mouseY;
      });
  }

  ngAfterViewInit(): void {
    this.width = this.card.nativeElement.offsetWidth;
    this.height = this.card.nativeElement.offsetHeight;
  }
}

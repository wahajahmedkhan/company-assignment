import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {delay, fromEvent, map, mapTo, repeat, share, switchMap, takeUntil} from 'rxjs';
import {UserInterface} from '@app-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  private config = {
    height: 0,
    width: 0,
    mouseX: 0,
    mouseY: 0,
  };
  @ViewChild('card', {static: true}) private card: ElementRef;
  @Input() user?: UserInterface;
  isShowingUserId = false;

  get mousePX(): number {
    return this.config.mouseX / this.config.width;
  }

  get mousePY(): number {
    return this.config.mouseY / this.config.height;
  }

  get nativeElement(): HTMLElement {
    return this.card.nativeElement;
  }

  cardStyle(): {transform: string} {
    return this.transformStyle();
  }

  cardBgTransform(): {transform: string} {
    return this.transformStyle();
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
          mouseX: e.pageX - this.nativeElement.offsetLeft - this.config.width / 2,
          mouseY: e.pageY - this.nativeElement.offsetTop - this.config.height / 2,
        })),
        repeat()
      )
      .subscribe((e: any) => {
        this.config.mouseX = e.mouseX;
        this.config.mouseY = e.mouseY;
      });
  }

  ngAfterViewInit(): void {
    this.config.width = this.card.nativeElement.offsetWidth;
    this.config.height = this.card.nativeElement.offsetHeight;
  }

  private transformStyle(): {transform: string} {
    const tX = this.mousePX * -50;
    const tY = this.mousePY * -30;
    return {transform: `rotateY(${tX}deg) rotateX(${tY}deg)`};
  }
}

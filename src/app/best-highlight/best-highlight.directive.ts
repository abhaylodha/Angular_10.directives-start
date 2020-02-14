import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})

export class BestHighlightDirective implements OnInit {

  constructor(private elemRef: ElementRef,private  renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.backgroundColor = 'red';
    this.color = 'white';
  }

  @HostListener('mouseleave') onMouseExit(eventData: Event) {
    this.backgroundColor = 'white';
    this.color = 'red';
  }

  @HostBinding('style.backgroundColor') backgroundColor: String = 'pink';
  @HostBinding('style.color') color: String = 'blue';

}

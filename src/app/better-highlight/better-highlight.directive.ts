import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  constructor(private elemref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elemref.nativeElement,
    //   'background-color', 'blue');
    // this.renderer.setStyle(this.elemref.nativeElement,
    //   'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elemref.nativeElement,
      'background-color', 'blue');
    this.renderer.setStyle(this.elemref.nativeElement,
      'color', 'white');
  }

  @HostListener('mouseleave') mouseexit(eventData: Event) {
    this.renderer.setStyle(this.elemref.nativeElement,
      'background-color', 'white');
    this.renderer.setStyle(this.elemref.nativeElement,
      'color', 'blue');
  }


}

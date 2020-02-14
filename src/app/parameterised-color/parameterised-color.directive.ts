import { Directive, Input, HostBinding, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appParameterisedColor]'
})

export class ParameterisedColorDirective implements OnInit {
  @Input() bgColorInput: String = 'transparent';
  @Input('appParameterisedColor') colorInput: String = 'blue';
  @HostBinding('style.backgroundColor') bgColor: String;
  @HostBinding('style.color') color: String = this.colorInput;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.bgColor = this.bgColorInput;
    this.color = this.colorInput;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.bgColor = this.colorInput;
    this.color = this.bgColorInput;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.bgColor = this.bgColorInput;
    this.color = this.colorInput;
  }
}

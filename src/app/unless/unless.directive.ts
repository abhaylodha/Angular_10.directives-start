import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    console.log("Reached here " + condition);
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateref);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(private templateref: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}

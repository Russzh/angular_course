import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfAuthenticated]'
})

export class IfAuthenticatedDirective implements OnChanges {
  @Input('appIfAuthenticated') public isAuthenticated: boolean | undefined = false;

  constructor(private view: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isAuthenticated) {
      this.view.createEmbeddedView(this.template);
    } else this.view.clear()
  }
}

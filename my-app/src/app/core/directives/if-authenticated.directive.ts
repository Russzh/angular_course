import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

import {AuthService} from "../../shared/services/auth.service";

@Directive({
  selector: '[appIfAuthenticated]',
  providers: [AuthService]
})

export class IfAuthenticatedDirective implements OnInit{
  @Input ('appIfAuthenticated') public isAuthenticated: boolean = false;

  constructor(private view: ViewContainerRef,
              private template: TemplateRef<any>) { }

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.view.createEmbeddedView(this.template);
    } else this.view.clear()
  }
}

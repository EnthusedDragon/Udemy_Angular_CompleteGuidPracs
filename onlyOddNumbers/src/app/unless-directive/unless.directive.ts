import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(value: boolean){
    if(!value)
    {
      this.vcRef.createEmbeddedView(this.template);
    }else{
      this.vcRef.clear();
    }
  }

  constructor(private template:TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

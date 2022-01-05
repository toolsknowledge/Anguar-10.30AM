import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ashokITNG]'
})
export class AshokitngDirective {

  constructor(private memory:ViewContainerRef,
              private tag:TemplateRef<any>){}

  @Input() set ashokITNG(flag:boolean){
      if(flag){
        this.memory.createEmbeddedView(this.tag);
      }else{
        this.memory.clear();
      }
  }

}

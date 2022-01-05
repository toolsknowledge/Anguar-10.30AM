import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ashokIT]'
})
export class AshokitDirective {

  @Input() color_one:any="";
  @Input() color_two:any="";

  constructor(private _el:ElementRef) { }

  @HostListener("mouseenter") onmouseenter(){
      this._el.nativeElement.style.backgroundColor=this.color_one;
  }

  @HostListener("mouseleave") onmouseleave(){
    this._el.nativeElement.style.backgroundColor = this.color_two;
  }
}

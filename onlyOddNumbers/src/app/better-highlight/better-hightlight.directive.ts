import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;
  
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit()
  {
//    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event){
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')
  mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}

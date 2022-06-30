import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'purple');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'purple');
    this.backgroundColor = this.highlightColor;
  }
  

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;

  }


}

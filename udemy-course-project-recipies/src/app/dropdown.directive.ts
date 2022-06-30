import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef,) { }

  @HostListener('click') menuClick() {
    let isOpened = this.elementRef.nativeElement.className.includes('open');

    if (!isOpened) {
      this.elementRef.nativeElement.classList.add('open');
    } else {
      this.elementRef.nativeElement.classList.remove('open');
    }
    
    
  } 

}

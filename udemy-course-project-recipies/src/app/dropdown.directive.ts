import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened = false;
  constructor() { }

  @HostListener('click') menuClick() {
    this.isOpened = !this.isOpened;

    // let isOpened = this.elementRef.nativeElement.className.includes('open');


    // if (!isOpened) {
    //   this.elementRef.nativeElement.classList.add('open');
    // } else {
    //   this.elementRef.nativeElement.classList.remove('open');
    // }
    
    
  } 

}

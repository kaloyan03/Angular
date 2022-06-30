import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHightlight]'
})
export class HighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
        this.elementRef.nativeElement.style.color = 'white';
    }

    
}
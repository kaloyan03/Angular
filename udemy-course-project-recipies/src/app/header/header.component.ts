import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
})
export class HeaderComponent {
    @Output() navClicked = new EventEmitter<string>();


    onNavClick(element: any) {
        this.navClicked.emit(element.target.textContent);
    }

}
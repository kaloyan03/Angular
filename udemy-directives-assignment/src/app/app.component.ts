import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-directives-assignment';

  isToggled: boolean = false;
  buttonClickLogs: number[] = [];
  buttonClicksCounter: number = 0;

  onClickToggleParagraph() {
    this.buttonClicksCounter++;

    if (this.isToggled) {
      this.isToggled = false;
    } else {
      this.isToggled = true;
    }

    this.buttonClickLogs.push(this.buttonClicksCounter);

    
  }
}

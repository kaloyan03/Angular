import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentChecked,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  
  //@ts-ignore
  @Input() element: {type: string, name: string, content: string};
  //@ts-ignore
  @Input() name: string;
  
  
  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  
}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('productName', {static: true}) nameInputRef: ElementRef;
  @ViewChild('productAmount', {static: true}) amountInputRef: ElementRef;

  @Output() itemAdded = new EventEmitter<{name:string, amount:number}>(); 

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddItem() {
    // event.preventDefault();
    const nameIngredient = this.nameInputRef.nativeElement.value;
    const amountIngredient =  this.amountInputRef.nativeElement.value;


    const newIngredient = new Ingredient(nameIngredient, amountIngredient);

    this.itemAdded.emit(newIngredient);
    
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('productName', {static: true}) nameInputRef: ElementRef;
  @ViewChild('productAmount', {static: true}) amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
      
  }
  
  onAddItem() {
    const nameIngredient = this.nameInputRef.nativeElement.value;
    const amountIngredient =  this.amountInputRef.nativeElement.value;


    const newIngredient = new Ingredient(nameIngredient, amountIngredient);

    this.shoppingListService.addIngredient(newIngredient);
    
  }

}

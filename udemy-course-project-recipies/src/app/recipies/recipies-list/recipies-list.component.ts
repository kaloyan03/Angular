import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe('Test', 'Just for testing', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b.jpg'),
    new Recipe('Test2', 'Just for testing', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe = undefined;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe
    .subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }
  
  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
  
}

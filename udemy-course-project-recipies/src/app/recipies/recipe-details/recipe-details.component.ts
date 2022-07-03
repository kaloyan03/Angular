import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {  
    
  }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeById(recipeId);

    this.route.params
      .subscribe(
        (params: Params) => {
          const recipeId = params['id'];
          this.recipe = this.recipeService.getRecipeById(recipeId);
        }
      )
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

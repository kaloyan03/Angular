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
  recipeId: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {  
    
  }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeById(this.recipeId);

    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeId = params['id'];
          this.recipe = this.recipeService.getRecipeById(this.recipeId);
        }
      )
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['recipies', this.recipeId, 'edit'])
  }

}

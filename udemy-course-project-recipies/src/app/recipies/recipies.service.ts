import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    recipies: Recipe[] = [
      new Recipe('Pizza', 'A tasty pizza named Master Burger', 'https://imgs.search.brave.com/rBj1rJBBcy8L47ICFvgGVkudwY2yDD9HXRovi-npQVw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmRp/c2NvdmVyeWNvb2tp/bmcuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAyL3Bp/enphLTEuanBnP2Zp/dD0yNDI2JTJDMzI5/Mg',
      [
      new Ingredient('Meat', 1),
      new Ingredient('Cheese', 1),
      new Ingredient('BBQ Sauce', 1)
    ]),
      new Recipe('Burger', 'A tasty burger named Black Angus', 'https://imgs.search.brave.com/sNH7S0Jggf0tZeSsOt6vd76du1zeftPjlj9GA0T1PZ0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvSmJZ/VXBQMzA0MHgyQmZo/U0Q0UkRJZDdHY3dE/R290QTBFNlZmSFAz/eFJzay5qcGc_YXV0/bz13ZWJwJnM9ZGNl/ZmQ1NTBjM2QzZjI3/MmFlOWEwMDg1MjJk/NjU4ZWNkNWVkMjk1/OA',
      [
        new Ingredient('Black Angus Meat', 1),
      new Ingredient('Cheese', 1),
      new Ingredient('BBQ Sauce', 1)
      ])
    ];
    
    
}
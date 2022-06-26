import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('Test', 'Just for testing', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

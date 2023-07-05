import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Feijoada',
      'Test recipe',
      'https://cheapandcheerfulcooking.com/wp-content/uploads/2020/05/vegan-feijoada-1.jpg'
    ),
    new Recipe(
      'Feijoada',
      'Test recipe',
      'https://cheapandcheerfulcooking.com/wp-content/uploads/2020/05/vegan-feijoada-1.jpg'
    ),
  ];
}

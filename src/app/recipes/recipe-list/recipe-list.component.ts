import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Feijoada',
      'Feijoada is a traditional Brazilian dish that is often considered the national dish of Brazil. It is a hearty and flavorful stew made with black beans, various cuts of pork, and sometimes beef. Is usually served with rice, collard greens, farofa (toasted cassava flour), and orange slices.',
      'https://cheapandcheerfulcooking.com/wp-content/uploads/2020/05/vegan-feijoada-1.jpg'
    ),
    new Recipe(
      'Strogonoff',
      'Strogonoff is a popular variation of the classic Russian dish that has been adapted to Brazilian tastes. It is a creamy and comforting dish made with sautéed chicken, onions, mushrooms, and a rich sauce typically consisting of tomato paste, heavy cream, and sometimes ketchup or mustard for added flavor. Is often served over white rice and it is commonly accompanied by shoestring potatoes or potato sticks.',
      'https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-light.jpeg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

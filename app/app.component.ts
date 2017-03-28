import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template:
    `<div class="container">
    <h1>Recipes to eat</h1>
    <ul>
      <li *ngFor="let currentRecipe of recipes" ><a (click)='setView(currentRecipe)'>{{currentRecipe.title}}</a><span [class]="ratingView(currentRecipe.rating)"></span></li>
    </ul>
    <div class="recipe-view" *ngIf="selectRecipe">
    {{selectRecipe.title}}

    <ul>
    <li *ngFor='let ingredient of selectRecipe.ingredients'>{{ingredient}}</li>
    </ul>

    {{selectRecipe.directions}}
    <form>
      <label>Enter a recipe rating (1-3):</label>
      <input [(ngModel)]="selectRecipe.rating" name="rating" type="number" min=1 max=3 required>
    </form>
    {{selectRecipe.rating}}
    </div>
  </div>`
})

export class AppComponent {
    recipes: Recipe[] = [
        new Recipe('Mac and Cheese box', ['boil water', 'add noodles to water and cook til done', 'drain water', 'add powder and stir'], ['box', 'water'],null),
        new Recipe('soft boiled egg', ['add water to a sauce pan', 'bring water to boil', 'add eggs and cook for 8 minutes'], ['eggs', 'water'],null),
        new Recipe('chicken broth', ['boil chicken carcass', 'drink!'], ['chiken carcass', 'water'],null),
    ];
    selectRecipe: Recipe = null;
    setView(clickedRecipe) {
        this.selectRecipe = clickedRecipe;
    }
    ratingView(rating) {
      if (rating === 1) {
        return 'glyphicon glyphicon-thumbs-down'
      } else if (rating === 2) {
        return 'glyphicon glyphicon-thumbs-up'
      } else if( rating===3){
        return 'glyphicon glyphicon-thumbs-up'
      }
    }
}

export class Recipe {
    constructor(public title: string, public directions: string[], public ingredients: string[], public rating: number) { };
}

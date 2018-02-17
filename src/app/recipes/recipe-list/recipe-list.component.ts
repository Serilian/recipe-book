import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe','This is only a test recipe','http://picz.in/data/media/8/Fast-food.jpg'),
    new Recipe('A test recipe','This is only a test recipe','http://picz.in/data/media/8/Fast-food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

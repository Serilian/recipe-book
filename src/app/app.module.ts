import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from "./recipes/recipe.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './core/home/home.component';
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}

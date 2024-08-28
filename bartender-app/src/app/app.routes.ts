import { RouterModule, Routes } from '@angular/router';
import { CocktailMenuComponent } from './views/cocktail-menu/cocktail-menu.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { OrderQueueComponent } from './views/order-queue/order-queue.component';
import { ViewStatusComponent } from './views/view-status/view-status.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'menu', component: CocktailMenuComponent },
    { path: 'orders', component: OrderQueueComponent },
    { path: 'status', component: ViewStatusComponent}

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
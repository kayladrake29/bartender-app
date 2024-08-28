import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderService } from './controllers/order.service';
import { CocktailMenuComponent } from './views/cocktail-menu/cocktail-menu.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./views/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailMenuComponent, CommonModule, NavbarComponent],
  providers: [OrderService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  currentView: string = 'menu';
  title = 'bartender-app';

  
 
}




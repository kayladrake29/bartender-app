import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CocktailMenuComponent } from '../cocktail-menu/cocktail-menu.component';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../controllers/order.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CocktailMenuComponent, CommonModule, RouterModule
  ],
  providers: [OrderService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}




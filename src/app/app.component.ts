import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { HomeComponent } from '../Components/home/home.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { ProductsComponent } from "../Components/products/products.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}

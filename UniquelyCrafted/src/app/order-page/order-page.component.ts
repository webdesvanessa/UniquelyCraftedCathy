import { Component } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  clickMessage = '';

  show = false;

  Toggle () {
    console.log(this.show);
    this.show = !this.show;
  }
}

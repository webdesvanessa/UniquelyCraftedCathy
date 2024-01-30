import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {
  show = false;
  show_video = false;

  mini = false;

  Toggle (state:boolean) {
    this.show = state;
  }
  ToggleVideo () {
    this.show_video = !this.show_video;
  }
  CloseVideo() {
    this.show_video = false;
  }

  ToggleMini () {
    this.mini = !this.mini;
  }

}

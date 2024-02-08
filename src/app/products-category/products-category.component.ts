import { Component, OnInit, Input } from '@angular/core';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent implements OnInit {
  // getting data from parent:
  @Input() categoryData: any;

  
  // fetching content from sanity using the sanity service:
  // listings: any;
  
  // query = '*[_type=="product_listing"]{product_category->{category_name}, product_name, product_code, product_description{description, optional}, product_size, product_price, "COLOURS": one_tone[]->{colour_name, colour_code, colour_hex}, "TWO_TONE": two_tone[]->{two_tone_name, two_tone_code, "ONE": colour_one->{colour_hex}, "TWO": colour_two->{colour_hex}}, "PATTERNS": patterns[]->{pattern_name, pattern_code, "IMG": pattern_image.asset->url}, custom_material, "MAIN_IMG": product_main_image.asset->url, "CONSTRAINT": product_main_image.constraint, "IMAGES": product_images[].asset->url, "PRICES":product_prices[]{price_description, price_amount}}';
  
  // constructor(private sanityService: SanityService) {}
  
  ngOnInit(): void {
    // this.sanityService.getClient().fetch(this.query).then((data) => {
    //   this.listings = [];

    //   console.log(this.categoryData.category_name);
    //   data.forEach((listing: any) => {
    //     if (listing.product_category.category_name == this.categoryData.category_name) {
    //       this.listings.push(listing);
    //     }
    //   });
    //   console.log(this.listings);

    // });


    // console.log(this.categoryData);

  }
  
}

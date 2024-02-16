import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  fragment: any;
  interval: any;

  constructor(private router: Router, private vpScroller: ViewportScroller, private sanityService: SanityService) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log("navigation end");
    //     this.fragment = event.urlAfterRedirects.split('#')[1];
    //     if (this.fragment) {
    //       console.log("fragment: ", this.fragment);
    //       this.interval = setInterval(() => {
    //         this.navigateFragment();
    //       }, 100);
    //     }
    //   }
    // });
  }
    
  
  // FETCH DATA FROM SANITY CMS:

  home_data: any;
  category_data: any;
  story_img: any;

  home_query = '{"HOMEPAGE": *[_type=="home_page"]{story{title,"STORY":content[].children[].text },"FEATURES":features[]{title, description,}} , "CATEGORIES": *[_type=="category"]{category_name, "category_image": category_image.asset->url}, "STORY-IMAGE": *[_type=="site_images"]{"img": story_image.asset->url} }';
 
  
  ngOnInit(): void {

    // FETCH FROM SANITY
    this.sanityService.getClient().fetch(this.home_query).then((data) => {
      this.home_data = data["HOMEPAGE"][0];
      this.category_data = data["CATEGORIES"];
      this.story_img = data["STORY-IMAGE"][0]["img"];
    });
  }

  makeUrl(link:string) {
    return "url(" + link + ")";
  }

  // // SCROLL TO FRAGMENT
  // navigateFragment() {
  //   const element = document.querySelector('#' + this.fragment);
  //   if (element) {
  //     clearInterval(this.interval);
  //     console.log("element: ", element);
  //     this.vpScroller.scrollToAnchor(this.fragment);
  //   }
  // }

}

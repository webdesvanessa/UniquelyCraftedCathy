import { Component, OnInit } from '@angular/core';

import { SanityService } from '../sanity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private sanityService: SanityService) {}
  
  // TOGGLE MOBILE NAV
  
  toggle = false;
  
  ToggleNav() {
    this.toggle = !this.toggle;
  }
  

  // FETCH DATA FROM SANITY CMS:

  logo: any;

  logo_query = '*[_type == "site_images"]{"img": logo.asset->url}' 

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.logo_query).then((data) => {
      this.logo = data[0]["img"];
    });
  }
}

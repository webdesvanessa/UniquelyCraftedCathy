import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DatePipe, ViewportScroller } from '@angular/common';

import { SanityService } from '../sanity.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [DatePipe],
})
export class FooterComponent implements OnInit {
  copyright_year: number = Date.now();


  fragment: any;
  interval: any;

  constructor(private router: Router, private vpScroller: ViewportScroller, private sanityService: SanityService) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log("navigation end");
    //     this.fragment = event.urlAfterRedirects.split('#')[1];
    //     if (this.fragment) {
    //       console.log("fragment");
    //       this.interval = setInterval(() => {
    //         this.navigateFragment();
    //       }, 100);
    //     }
    //   }
    // });
  }

  
  // GET DATA FROM PARENT:

  @Input() categoryName: any;

  
  // FETCH DATA FROM SANITY CMS:

  contact_data: any;
  footer_image: any;
  logo: any;
  
  contact_query = '{"CONTACT":*[_type == "contact_details"]{address, "PHONE": phone_number[], "WHATSAPP": whatsapp_number[], "EMAIL": email_address[], "SOCIAL_LINKS": social_links[]{platform, handle, link, icon}, designed_by{designer_name, designer_contact[]{method, icon, link}}},"IMAGE":*[_type == "site_images"]{"footer": footer_image.asset->url, "logo": logo.asset->url} }'

  ngOnInit(): void {
    this.sanityService.getClient().fetch(this.contact_query).then((data) => {
      this.contact_data = data["CONTACT"][0];
      this.footer_image = data["IMAGE"][0]["footer"];
      this.logo = data["IMAGE"][0]["logo"];
    });
  }


  whatsapp_number(number:string) {
    var whatsapp = number.replace(/^0/, "27").replace(/\s/g, "");
    return 'http://wa.me/' + whatsapp;
  }

  email_mailto(email:string) {
    return 'mailto:' + email;
  }

  strip_icon(icon:string) {
    var icon_class = icon.replace("<i class=\"", "").replace("\"></i>", "");
    return icon_class;
  }

  makeUrl(link:string) {
    return "url(" + link + ")";
  }

  // // SCROLL TO FRAGMENT
  // navigateFragment() {
  //   const element = document.querySelector('#' + this.fragment);
  //   if (element) {
  //     this.vpScroller.scrollToAnchor(this.fragment);
  //     console.log("element")
  //     clearInterval(this.interval);
  //   }
  // }

}

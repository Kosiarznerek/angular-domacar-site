import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ICarouselImage} from './partners.component.models';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  // Component data
  public readonly carouselOptions: OwlOptions;
  public readonly carouselImages: ICarouselImage[];

  constructor() {

    // Set carousel options
    this.carouselOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      autoWidth: false,
      navSpeed: 1,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 5
        },
        996: {
          items: 6
        }
      },
      nav: false
    };

    // Create images
    this.carouselImages = new Array(6).fill(0).map((v, i) => ({
      id: (i + 1).toString(),
      src: `assets/images/about/partner-${i + 1}.png`,
      alt: 'Partner logo',
      title: 'Partner logo'
    }));

  }

  ngOnInit(): void {
  }

}

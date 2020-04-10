import {Component, OnInit, ViewChild} from '@angular/core';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from 'ngx-image-gallery';
import {CarouselComponent, OwlOptions} from 'ngx-owl-carousel-o';
import {SlideModel} from 'ngx-owl-carousel-o/lib/models/slide.model';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  // Configuration
  public readonly galleryConfiguration: GALLERY_CONF;
  public readonly carouselOptions: OwlOptions;

  // Component data
  public images: GALLERY_IMAGE[];
  public currentImageIndex: number;

  // View child
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  constructor() {

    // Setting product-gallery configuration
    this.galleryConfiguration = {
      imageOffset: '0px',
      showDeleteControl: false,
      showImageTitle: false,
    };

    // Set carousel options
    this.carouselOptions = {
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      autoWidth: false,
      navSpeed: 1,
      nav: false,
      responsive: {
        0: {
          items: 4
        },
        576: {
          items: 5
        },
        768: {
          items: 6
        },
        996: {
          items: 7
        }
      },
    };

  }

  ngOnInit(): void {

    // Setting mocked images
    this.images = new Array(16).fill(0).map((v, i) => ({
      url: `/assets/images/products/product${i % 8 + 1}.png`,
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
      thumbnailUrl: `/assets/images/products/product${i % 8 + 1}.png`
    }));

    // Set current image index
    this.currentImageIndex = 0;

  }

  /**
   * Opens product-gallery on specific image
   * @param index Index of image to open
   */
  public openGallery(index: number = this.currentImageIndex): void {

    this.ngxImageGallery.open(index);

  }

  /**
   * Executes when next button was clicked
   * @param owlCarousel Carousel component
   */
  public onCarouselNextButtonClick(owlCarousel: CarouselComponent): void {

    // Getting active slides
    const activeSlides: SlideModel[] = owlCarousel.slidesData
      .filter(v => v.isActive);

    // Getting last active id
    const lastActiveId: string = activeSlides[activeSlides.length - 1]?.id;

    // Slide to next
    const lastActiveNumber: number = +lastActiveId.split('owl-slide-')[1];
    owlCarousel.to(`owl-slide-${lastActiveNumber + 1}`);

  }

  /**
   * Executes when previous button was clicked
   * @param owlCarousel Carousel component
   */
  public onCarouselPreviousButtonClick(owlCarousel: CarouselComponent): void {

    // Getting active slides
    const activeSlides: SlideModel[] = owlCarousel.slidesData
      .filter(v => v.isActive);

    // Getting first active id
    const firstActiveId: string = activeSlides[0]?.id;

    // Slide to previous
    const firstActiveNumber: number = +firstActiveId.split('owl-slide-')[1];
    owlCarousel.to(`owl-slide-${Math.max(firstActiveNumber - activeSlides.length, 0)}`);

  }

}

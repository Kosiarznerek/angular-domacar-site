import {Component, OnInit} from '@angular/core';
import {EDetailsTab, IProductDetails} from './product-details.component.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // Component data
  public activeDetailsTab: EDetailsTab;
  public productDetails: IProductDetails;

  // Simple getter
  public EDetailsTab = EDetailsTab;

  constructor() {
  }

  ngOnInit(): void {

    // Setting active product-details tab
    this.activeDetailsTab = EDetailsTab.Description;

    // Create mocked product product-details
    this.productDetails = {
      description: `
        Quisque finibus, eros convallis semper hendrerit, diam neque sollicitudin nibh,
        id lacinia velit elit et est. Integer pretium ex vel risus malesuada ultrices.
        Curabitur scelerisque fringilla nulla, ac aliquet mauris vulputate nec.
        Donec molestie mi magna, a vehicula lectus cursus ac. Nullam blandit scelerisque
        nibh, eget ornare tortor dapibus eu. Nam pulvinar augue nisl, id egestas sapien
        finibus sit amet. Proin purus tortor, rutrum ut efficitur non, rutrum vitae nibh.
        Cras lacinia eu nunc in pellentesque. In hac habitasse platea dictumst. Nullam
        convallis malesuada iaculis. Nunc bibendum vestibulum elit, eu pellentesque ex
        suscipit eu. Maecenas egestas congue ex gravida aliquet. Fusce ornare felis massa,
        quis laoreet ipsum mollis et. Phasellus ullamcorper, nibh in euismod fringilla,
        dui ipsum laoreet magna, et vulputate tellus odio id nisi.
        <br/><br/>
        Sed ultricies at nisl sed ullamcorper. Fusce ut venenatis lectus. Suspendisse
        odio enim, cursus eget leo ut, ornare laoreet felis. Proin laoreet sapien ligula,
        ut volutpat ipsum porttitor sed. Morbi bibendum metus quis elit tincidunt,
        eget hendrerit neque porta. Maecenas vel ornare sem, in eleifend libero.
        Cras augue augue, posuere a accumsan vel, scelerisque auctor leo. Donec
        hendrerit semper urna, sed tempor justo luctus non. Phasellus hendrerit,
        leo eget ultrices dictum, enim mauris euismod diam, sit amet tempor dolor
        orci et dolor. Vivamus commodo efficitur augue, volutpat fermentum quam
        vehicula egestas. Nullam eget lorem gravida, convallis sem id, sagittis dolor.
        In in libero mi. In eu risus id orci sollicitudin mattis sed id arcu.
      `,
      additionalInformation: `
        Vestibulum et ligula molestie, euismod elit at, volutpat purus. Suspendisse
        commodo libero nec velit eleifend, eget feugiat mi hendrerit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Sed mollis
        neque scelerisque ultrices consequat. Fusce sed feugiat quam, ut varius
        elit. Nam non consectetur justo. Aenean venenatis, est in vestibulum
        dignissim, orci diam porttitor massa, id tempus eros neque in nisl.
        <br/><br/>
        Phasellus fermentum et quam eu consequat. Sed pulvinar sem vel augue
        iaculis, id condimentum lacus eleifend. Integer porta aliquet velit
        a mollis. In id euismod sapien, quis interdum neque. Suspendisse posuere
        turpis vitae turpis rhoncus ultricies. Curabitur et ipsum facilisis,
        laoreet tortor at, scelerisque metus. Mauris in risus id odio iaculis
        suscipit in sit amet velit. Quisque vel lectus condimentum, faucibus quam et,
        pulvinar dui. Duis non nulla ac mauris vehicula sodales.
      `,
      reviews: new Array(3).fill(0).map((v, i) => ({
        authorName: [
          'Aleksandra Majer',
          'Dominik Morkades',
          'Marek Kuźmiński'
        ][i],
        content: [
          'Wspaniały produkt warty swojej ceny.',
          'Na prawdę gorąco polecam. Bardzo przydatny gadżet.',
          'Jest pare rzeczy do dopracowania, ale całokształt na wysokim poziomie'
        ][i],
        rating: Math.floor(Math.random() * 2) + 3,
        publishedDate: new Date()
      }))
    };

  }

}

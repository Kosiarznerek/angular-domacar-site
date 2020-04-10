import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStarsComponent implements OnInit {

  // Component input
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() currentValue: number;

  constructor() {
  }

  /**
   * Return array with length equal full starts
   */
  public get fullStars(): null[] {

    const rescaled: number = this._rescale(
      this.currentValue,
      this.minValue,
      this.maxValue,
      0,
      5
    );
    return new Array(Math.floor(rescaled)).fill(null);

  }

  /**
   * Checks if half start is need
   */
  public get isHalfStar(): boolean {

    const rescaled: number = this._rescale(
      this.currentValue,
      this.minValue,
      this.maxValue,
      0,
      5
    );
    return !Number.isInteger(rescaled);

  }

  /**
   * Return array with length equal empty starts
   */
  public get emptyStars(): null[] {

    const emptyStarts: number = 5 - this.fullStars.length - (this.isHalfStar ? 1 : 0);
    return new Array(emptyStarts).fill(null);

  }

  ngOnInit(): void {
  }

  /**
   * Rescales number to new range
   * @param num Number to scale
   * @param inMin Input scale min
   * @param inMax Input scale max
   * @param outMin Output scale min
   * @param outMax Output scale max
   */
  private _rescale(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {

    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  }

}

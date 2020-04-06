import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {IDropdownItem} from './dropdown.component.models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  // Component inputs
  @Input() values: IDropdownItem[];
  @Input() currentValue: IDropdownItem['value'];

  // Component outputs
  @Output() selectionChange: EventEmitter<IDropdownItem>;

  // Component data
  public dropdownVisible: boolean;

  constructor(
    private readonly _elementRef: ElementRef,
  ) {

    // Create outputs
    this.selectionChange = new EventEmitter<IDropdownItem>();

  }

  ngOnInit(): void {
  }

  /**
   * Toggles dropdown visibility
   */
  public toggleDropdownVisibility(): void {

    this.dropdownVisible = !this.dropdownVisible;

  }

  /**
   * Hides dropdown menu if event was outside element
   */
  @HostListener('document:click', ['$event'])
  @HostListener('document:scroll', ['$event'])
  public hideDropdown(event: MouseEvent | Event): void {

    // Check if click was outside element
    let target: HTMLElement = event.target as HTMLElement;
    while (target && !target.isSameNode(this._elementRef.nativeElement)) {
      target = target.parentElement;
    }

    // Hide dropdown
    if (!target || !target.isSameNode(this._elementRef.nativeElement)) {
      this.dropdownVisible = false;
    }

  }

  /**
   * Executes when dropdown value has been selected
   * @param value Selected value
   */
  public onDropdownItemSelect(value: IDropdownItem): void {

    this.currentValue = value.value;
    this.dropdownVisible = false;
    this.selectionChange.emit(value);

  }

}

import {Type} from '@angular/core';

// Tab interface
export interface ITabItem {
  displayName: string;
  isActive: boolean;
  component: Type<any>;
}

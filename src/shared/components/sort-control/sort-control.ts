import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SortDirection } from '../../../core/paging';

@Component({
  selector: 'sort-control',
  imports: [FormsModule],
  templateUrl: './sort-control.html'
})
export class SortControl {

  @Input() public sortDirection: SortDirection = null;
  @Output() public sortDirectionChange = new EventEmitter<SortDirection>();

  protected onSortDirectionChanged(direction: SortDirection)
  {
    this.sortDirection = direction;
    this.sortDirectionChange.emit(this.sortDirection);
  }
}

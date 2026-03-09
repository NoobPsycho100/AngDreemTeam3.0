import { Component, Input } from '@angular/core';
import { BooksPanel } from '../../books/books-panel/books-panel';

@Component({
  selector: 'content-panel',
  imports: [BooksPanel],
  templateUrl: './content-panel.html',
  styleUrl: './content-panel.less'
})
export class ContentPanel {

  @Input()
  public content = '';
}

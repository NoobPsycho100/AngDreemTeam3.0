import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-panel',
  templateUrl: './content-panel.html',
  styleUrl: './content-panel.less'
})
export class ContentPanel {

  @Input()
  public content = '';
}

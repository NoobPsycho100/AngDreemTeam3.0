import { Component } from '@angular/core';
import { MenuPanel } from '../features/menu/menu-panel';
import { HeaderPanel } from '../features/header/header-panel';
import { ContentPanel } from '../features/content-panel/content-panel';

@Component({
  selector: 'app-root',
  imports: [MenuPanel, HeaderPanel, ContentPanel],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
}

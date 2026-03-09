import { Component } from '@angular/core';
import { MenuPanel } from '../features/layout/menu/menu-panel';
import { HeaderPanel } from '../features/layout/header/header-panel';
import { ContentPanel } from '../features/layout/content-panel/content-panel';

@Component({
  selector: 'app-root',
  imports: [MenuPanel, HeaderPanel, ContentPanel],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
}

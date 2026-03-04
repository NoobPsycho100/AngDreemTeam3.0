import { Component, HostBinding, QueryList, ViewChildren } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'menu-panel',
  imports: [MenuItem],
  templateUrl: './menu-panel.html',
  styleUrl: './menu-panel.less'
})
export class MenuPanel {

  @HostBinding('class.collapsed')
  protected isCollapsed: boolean = false;

  @ViewChildren(MenuItem) 
  private menuItems: QueryList<MenuItem> = new QueryList<MenuItem>();

  protected showCopiright()
  {
    alert("©Copyleft by Noob Psycho, 2026")
  }

  protected collapsePanel()
  {
    this.isCollapsed = !this.isCollapsed;

    this.menuItems.forEach((item)=>{item.collapseItem();});
  }
}

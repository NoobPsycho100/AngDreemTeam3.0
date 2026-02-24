import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.less'
})
export class MenuItem {

  @HostBinding('class.collapsed') 
  protected isCollapsed: boolean = false;

  @Input()
  public title = 'menu-item';
  @Input()
  public href = '';
  @Input()
  public collapsedIcon = '';
  @Output()
  public menuClick = new EventEmitter();

  protected onMenuClick(){
    //debugger;
    this.menuClick.emit();
  }

  public collapseItem()
  {
    //debugger;
    this.isCollapsed = !this.isCollapsed;
  }
}

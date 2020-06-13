import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../Bean/MenuItem';
import { Router, NavigationEnd } from '@angular/router';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public appVersion: string = ''
  public clickItem: MenuItem;
  public menuList: Array<MenuItem> = [];
  private menuItemIsOpenMap: Map<string, boolean> = new Map();
  constructor(
    private router: Router
  ) {
    // this.appVersion = `v${version}`;
    this.appVersion = `2020-06-13`;
  }

  ngOnInit() {
    this.menuList = this.mockMenuList();
    this.clickItem = this.menuList[0];
  }

  @Output() menuStatus: EventEmitter<boolean> = new EventEmitter();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuStatus.emit(this.isMenuOpen);
  }

  onClickMenuItem(menuItem: MenuItem) {
    // console.warn(menuItem);
    this.clickItem = menuItem;
    this.router.navigate([menuItem.url]);
  }

  onToggleMenuItem(menuItem: MenuItem) {
    const getIsOpen = !!this.menuItemIsOpenMap.get(menuItem.name);
    this.menuItemIsOpenMap.set(menuItem.name, !getIsOpen);

    let targetImg = document.getElementById(`${menuItem.name}state`);
    if (this.menuItemIsOpenMap.get(menuItem.name)) {
      (<HTMLImageElement>targetImg).style.transform = 'rotate(90deg)';
    }
    else {
      (<HTMLImageElement>targetImg).style.transform = 'rotate(270deg)';
    }
  }

  private mockMenuList(): Array<MenuItem> {

    let rxjsMenuItem = new MenuItem('Rxjs', '--');
    rxjsMenuItem.childMenuItemList = [
      new MenuItem('ajax', '/ajax', '#ffcfcf'),
      new MenuItem('bindCallback', '/bindCallback', '#ffcfcf'),
      new MenuItem('defer', '/defer'),
      new MenuItem('empty', '/empty'),
      new MenuItem('from', '/from')
    ];
    return [
      new MenuItem('homePage', ''),
      new MenuItem('dragObject', '/dragObject'),
      new MenuItem('autoComplete', '/autoComplete'),
      rxjsMenuItem,
    ];
  }

  public getMenuItemIsOpen(menuItem: MenuItem): boolean {
    return !!this.menuItemIsOpenMap.get(menuItem.name);
  }

  public onMouseover(menuItem: MenuItem) {
    let targetImg = document.getElementById(`${menuItem.name}state`);
    (<HTMLImageElement>targetImg).src = './assets/whiteArrow.svg'

  }

  public onMouseout(menuItem: MenuItem) {
    let targetImg = document.getElementById(`${menuItem.name}state`);
    (<HTMLImageElement>targetImg).src = './assets/blackArrow.svg'
  }

}

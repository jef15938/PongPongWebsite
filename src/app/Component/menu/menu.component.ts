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
  constructor(
    private router: Router
  ) {
    this.appVersion = `v${version}`;
    // this.appVersion = `2020-06-13`;
  }

  public isMenuOpen = true;
  public appVersion = '';
  public clickItem: MenuItem;
  public menuList: Array<MenuItem> = [];
  private menuItemIsOpenMap: Map<string, boolean> = new Map();

  @Output() menuStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    this.menuList = this.mockMenuList();
    this.clickItem = this.menuList[0];
  }

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

    const targetImg = document.getElementById(`${menuItem.name}state`);
    if (this.menuItemIsOpenMap.get(menuItem.name)) {
      (targetImg as HTMLImageElement).style.transform = 'rotate(90deg)';
    }
    else {
      (targetImg as HTMLImageElement).style.transform = 'rotate(270deg)';
    }
  }

  private mockMenuList(): Array<MenuItem> {

    const rxjsMenuItem = new MenuItem('Rxjs', '--');
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
      new MenuItem('generateFibonacci', '/generateFibonacci'),
      new MenuItem('imageMoveEffect', '/imageMoveEffect'),
      rxjsMenuItem,
    ];
  }

  public getMenuItemIsOpen(menuItem: MenuItem): boolean {
    return !!this.menuItemIsOpenMap.get(menuItem.name);
  }

  public onMouseover(menuItem: MenuItem) {
    const targetImg = document.getElementById(`${menuItem.name}state`);
    (targetImg as HTMLImageElement).src = './assets/whiteArrow.svg';

  }

  public onMouseout(menuItem: MenuItem) {
    const targetImg = document.getElementById(`${menuItem.name}state`);
    (targetImg as HTMLImageElement).src = './assets/blackArrow.svg';
  }

}

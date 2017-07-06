import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar.config';
import { MenuType } from './navbar.common';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [ 'navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;
    isCollapsed = true;

    constructor() {}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'navbar-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }
}

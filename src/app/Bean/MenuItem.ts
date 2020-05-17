export class MenuItem {

    private _name: string;
    private _url: string;
    private _backgroundColor: string;
    private _childMenuItemList: MenuItem[] = [];

    constructor(name: string, url: string, backgroundColor: string = '') {
        this._name = name;
        this._url = url;
        this._backgroundColor = backgroundColor;
    }


    get name(): string {
        return this._name;
    }

    get url(): string {
        return this._url;
    }

    get backgroundColor(): string {
        return this._backgroundColor;
    }

    get childMenuItemList(): MenuItem[] {
        return this._childMenuItemList;
    }

    set childMenuItemList(childMenuItemList: MenuItem[]) {
        this._childMenuItemList = childMenuItemList;
    }

}
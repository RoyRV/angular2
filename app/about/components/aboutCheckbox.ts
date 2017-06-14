import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutCheckbox.html',
    styleUrls : ['app/about/aboutMain.component.css' ]
})
export class AboutCheckbox {
    public title: string = 'About Checkbox';
    public defaultValue: boolean = true;
    public primaryValue: boolean = false;
    public sucessValue: boolean = true;
    public infoValue: boolean = false;
    public warningValue: boolean = true;
    public errorValue: boolean = false;

    constructor() {

    }
}

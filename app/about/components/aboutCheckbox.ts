import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutCheckbox.html',
    styleUrls : ['app/about/aboutMain.component.css' ]
})
export class AboutCheckbox {
    private title: string = 'About Checkbox';

    private defaultValue: boolean = true;
    private primaryValue: boolean = false;
    private sucessValue: boolean = true;
    private infoValue: boolean = false;
    private warningValue: boolean = true;
    private errorValue: boolean = false; 
    private codeHtml : string = "";
    private codeJs : string = "";
    constructor() {
        this.codeHtml = '&lt;my-checkbox ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue"' +
            '&gt;<br/>' +
            '&lt;/my-checkbox&gt;';
        this.codeJs = 'public defaultValue: boolean = true;<br/><br/>'+
            'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
    }
}

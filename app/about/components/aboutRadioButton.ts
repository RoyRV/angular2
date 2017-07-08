import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutRadioButton.html',
    styleUrls : ['app/about/aboutMain.component.css' ]
})
export class AboutRadioButton {
    private title: string = 'About RadioButton';

    private defaultValue: boolean = true;
    private primaryValue: boolean = false;
    private sucessValue: boolean = true;
    private infoValue: boolean = false;
    private warningValue: boolean = true;
    private errorValue: boolean = false; 
    private codeHtml : string = "codeHtml";
    private codeJs : string = "codeHtml";
    
    constructor() {
       this.codeHtml = '&lt;my-radiobutton ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue" ' +
            'class="radio-info"' +
            '&gt;<br/>' +
            '&lt;/my-radiobutton&gt;';
            this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
    }
}

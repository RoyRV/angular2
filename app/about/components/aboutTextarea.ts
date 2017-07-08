import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutTextarea.html',
    styleUrls: ['app/about/aboutMain.component.css']
})

export class AboutTextarea {
    private title: string = "About Textarea";
    private defaultValue: string = "Roy Rojas";
    private codeHtml: string = "";
    private codeJs: string = "";

    constructor() {
        this.codeHtml = '&lt;my-textarea ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textarea&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';

    }
}
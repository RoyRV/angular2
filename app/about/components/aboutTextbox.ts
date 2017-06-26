import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutTextbox.html',
    styleUrls: ['app/about/aboutMain.component.css']
})

export class AboutTextbox {
    private title: string = "About Textbox";
    private defaultValue: string = "Roy Rojas";
    private codeHtml: string = "";
    private codeJs: string = "";
    constructor() {
    }

    activate() {
        this.codeHtml = '&lt;my-textbox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textbox&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';

    }
}
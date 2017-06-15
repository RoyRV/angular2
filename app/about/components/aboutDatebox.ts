import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutDatebox.html',
    styleUrls: ['app/about/aboutMain.component.css']
})

export class AboutDatebox {
    private title: string = "About Datebox";
    private codeHtml: string = "";
    private codeJs: string = "";
    private defaultValue = "05/10/2017";
    private requiredValue = "25/10/2017";
 
    constructor() {
        this.codeHtml = '&lt;my-datebox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'format="mm/dd/yyyy" ' +
            'is-required="true"' +
            '&gt;<br/>' +
            '&lt;/my-datebox&gt;';

        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "05/10/2017";<br/>}';

    }
}
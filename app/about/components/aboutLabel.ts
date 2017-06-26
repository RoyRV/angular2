import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutLabel.html',
    styleUrls : ['app/about/aboutMain.component.css' ]
})

export class AboutLabel{
    private title: string = "About Label";
    private codeHtml: string = "";
    private codeJs: string = "";
    private labelValue: string ="Valor XXX de un label";

    constructor(){
        this.codeHtml = '&lt;my-label ' +
            'objId="demo Label"' +
            'name="Demo" ' +
            '[(value)]="labelValue" ' + 
            '&gt;<br/>' +
            '&lt;/my-label&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.labelValue = "Valor XXX de un label";<br/>}';

    }
}
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

}
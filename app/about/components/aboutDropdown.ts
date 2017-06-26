import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutDropdown.html',
    styleUrls: ['app/about/aboutMain.component.css']
})

export class AboutDropdown {
    private title: string = "About Dropdown";
    private codeHtml: string = "";
    private codeJs: string = "";
    private dropdownOptions : Array<any>;
    private selected : any;
    
    constructor() {
        this.codeHtml = '&lt;my-dropdown ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(selected)]="selected" ' +
            '[(options)]="dropdownOptions" ' +
            '&gt;<br/>' +
            '&lt;/my-dropdown&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.dropdownOptions = [' + '<br/>' +
            ' \t{ id: "1", text: "Desc 1" },' + '<br/>' +
            ' \t{ id: "2", text: "Desc 2" },' + '<br/>' +
            ' \t{ id: "3", text: "Desc 3" },' + '<br/>' +
            ' \t...' + '<br/>' +
            ' \t{ id: "n", text: "Desc n" },' + '<br/>' +
            ' ] ;' + '<br/>' +
            ' this.selected = this.dropdownOptions[1];<br/>}';

        this.dropdownOptions = [
            { id: "1", text: "Desc 1" },
            { id: "2", text: "Desc 2" },
            { id: "3", text: "Desc 3" },
            { id: "4", text: "Desc 4" },
            { id: "5", text: "Desc 5" },
            { id: "6", text: "Desc 6" }
        ];

        this.selected = this.dropdownOptions[1];
    }
}
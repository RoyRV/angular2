import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/about/components/aboutPicklist.html',
    styleUrls : ['app/about/aboutMain.component.css' ]
})

export class AboutPicklist{
    private title : string = "About Picklist";
    private codeHtml: string = "";
    private codeJs: string = "";
    private list : Array<any>;
    private listPrimary : Array<any>;
    private listInfo : Array<any>;
    private listDanger : Array<any>;


    constructor(){
        this.list = [
            { id: 1, text: "Desc 1", checked: true },
            { id: 2, text: "Desc 2", checked: false },
            { id: 3, text: "Desc 3", checked: true },
            { id: 4, text: "Desc 4", checked: false }
        ];

        this.listPrimary = [
            { id: 1, text: "Desc Primary 1", checked: false },
            { id: 2, text: "Desc Primary 2", checked: false },
            { id: 3, text: "Desc Primary 3", checked: true },
            { id: 4, text: "Desc Primary 4", checked: true }
        ];

        this.listInfo = [
            { id: 1, text: "Desc Info 1", checked: true },
            { id: 2, text: "Desc Info 2", checked: true },
            { id: 3, text: "Desc Info 3", checked: false },
            { id: 4, text: "Desc Info 4", checked: false }
        ];

        this.listDanger = [
            { id: 1, text: "Desc Danger 1", checked: false },
            { id: 2, text: "Desc Danger 2", checked: true },
            { id: 3, text: "Desc Danger 3", checked: false},
            { id: 4, text: "Desc Danger 4", checked: true  }
        ];

        this.codeHtml = '&lt;my-picklist ' +
            'objId="picklistDemo" ' +
            'name="PickList demo" ' +
            '[(list)]="pickList" ' +
            'class="checkbox-primary" ' +
            'alignment="horizontal" ' +
            'selectAll="true" ' +
            '&gt;<br/>' +
            '&lt;/my-picklist&gt;';

        this.codeJs = 'constructor() { <br/>' +
            ' this.pickList = [' + '<br/>' +
            ' \t{ id: 1, text: "Desc Primary 1", checked: false },' + '<br/>' +
            ' \t{ id: 2, text: "Desc Primary 2", checked: true  },' + '<br/>' +
            ' \t{ id: 3, text: "Desc Primary 3", checked: true  },' + '<br/>' +
            ' \t...' + '<br/>' +
            ' \t{ id: "n", text: "Desc n" } , checked: true ' + '<br/>' +
            ' ] ;' + '<br/>' +
            ' }';
    }

    get selectedDefaultList() {
        return this.list.filter(x => x.checked).map(x => x.id);
    }
    get selectedPrimaryList() {
        return this.listPrimary.filter(x => x.checked).map(x => x.id);
    }
    get selectedInfoList() {
        return this.listInfo.filter(x => x.checked).map(x => x.id);
    }
    get selectedDangerList() {
        return this.listDanger.filter(x => x.checked).map(x => x.id);
    }
}
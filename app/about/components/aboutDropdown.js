"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutDropdown = (function () {
    function AboutDropdown() {
        this.title = "About Dropdown";
        this.codeHtml = "";
        this.codeJs = "";
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
    return AboutDropdown;
}());
AboutDropdown = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutDropdown.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutDropdown);
exports.AboutDropdown = AboutDropdown;
//# sourceMappingURL=aboutDropdown.js.map
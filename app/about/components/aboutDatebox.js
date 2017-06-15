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
var AboutDatebox = (function () {
    function AboutDatebox() {
        this.title = "About Datebox";
        this.codeHtml = "";
        this.codeJs = "";
        this.defaultValue = "05/10/2017";
        this.requiredValue = "25/10/2017";
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
    return AboutDatebox;
}());
AboutDatebox = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutDatebox.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutDatebox);
exports.AboutDatebox = AboutDatebox;
//# sourceMappingURL=aboutDatebox.js.map
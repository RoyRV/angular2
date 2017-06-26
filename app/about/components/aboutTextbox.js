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
var AboutTextbox = (function () {
    function AboutTextbox() {
        this.title = "About Textbox";
        this.defaultValue = "Roy Rojas";
        this.codeHtml = "";
        this.codeJs = "";
    }
    AboutTextbox.prototype.activate = function () {
        this.codeHtml = '&lt;my-textbox ' +
            'obj-id="demo" ' +
            'name="Demo-Label" ' +
            'value.bind="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textbox&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';
    };
    return AboutTextbox;
}());
AboutTextbox = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutTextbox.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutTextbox);
exports.AboutTextbox = AboutTextbox;
//# sourceMappingURL=aboutTextbox.js.map
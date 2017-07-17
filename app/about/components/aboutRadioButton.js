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
var AboutRadioButton = (function () {
    function AboutRadioButton() {
        this.title = 'About RadioButton';
        this.defaultValue = true;
        this.primaryValue = false;
        this.sucessValue = true;
        this.infoValue = false;
        this.warningValue = true;
        this.errorValue = false;
        this.codeHtml = "codeHtml";
        this.codeJs = "codeHtml";
        this.codeHtml = '&lt;my-radiobutton ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue" ' +
            'class="radio-info"' +
            '&gt;<br/>' +
            '&lt;/my-radiobutton&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
    }
    AboutRadioButton = __decorate([
        core_1.Component({
            templateUrl: 'app/about/components/aboutRadioButton.html',
            styleUrls: ['app/about/aboutMain.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AboutRadioButton);
    return AboutRadioButton;
}());
exports.AboutRadioButton = AboutRadioButton;
//# sourceMappingURL=aboutRadioButton.js.map
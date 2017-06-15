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
var AboutCheckbox = (function () {
    function AboutCheckbox() {
        this.title = 'About Checkbox';
        this.defaultValue = true;
        this.primaryValue = false;
        this.sucessValue = true;
        this.infoValue = false;
        this.warningValue = true;
        this.errorValue = false;
        this.codeHtml = "";
        this.codeJs = "";
        this.codeHtml = '&lt;my-checkbox ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue"' +
            '&gt;<br/>' +
            '&lt;/my-checkbox&gt;';
        this.codeJs = 'public defaultValue: boolean = true;<br/><br/>' +
            'constructor() { <br/>' +
            ' this.defaultValue = true;<br/>}';
    }
    return AboutCheckbox;
}());
AboutCheckbox = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutCheckbox.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutCheckbox);
exports.AboutCheckbox = AboutCheckbox;
//# sourceMappingURL=aboutCheckbox.js.map
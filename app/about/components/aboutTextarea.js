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
var AboutTextarea = (function () {
    function AboutTextarea() {
        this.title = "About Textarea";
        this.defaultValue = "Roy Rojas";
        this.codeHtml = "";
        this.codeJs = "";
        this.codeHtml = '&lt;my-textarea ' +
            'objId="demo" ' +
            'name="Demo-Label" ' +
            '[(value)]="defaultValue" ' +
            'placeholder="Demo"' +
            '&gt;<br/>' +
            '&lt;/my-textarea&gt;';
        this.codeJs = 'constructor() { <br/>' +
            ' this.defaultValue = "Roy Rojas";<br/>}';
    }
    return AboutTextarea;
}());
AboutTextarea = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutTextarea.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutTextarea);
exports.AboutTextarea = AboutTextarea;
//# sourceMappingURL=aboutTextarea.js.map
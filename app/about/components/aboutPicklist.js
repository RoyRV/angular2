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
var AboutPicklist = (function () {
    function AboutPicklist() {
        this.title = "About Picklist";
        this.codeHtml = "";
        this.codeJs = "";
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
            { id: 3, text: "Desc Danger 3", checked: false },
            { id: 4, text: "Desc Danger 4", checked: true }
        ];
    }
    Object.defineProperty(AboutPicklist.prototype, "selectedDefaultList", {
        get: function () {
            return this.list.filter(function (x) { return x.checked; }).map(function (x) { return x.id; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPicklist.prototype, "selectedPrimaryList", {
        get: function () {
            return this.listPrimary.filter(function (x) { return x.checked; }).map(function (x) { return x.id; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPicklist.prototype, "selectedInfoList", {
        get: function () {
            return this.listInfo.filter(function (x) { return x.checked; }).map(function (x) { return x.id; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPicklist.prototype, "selectedDangerList", {
        get: function () {
            return this.listDanger.filter(function (x) { return x.checked; }).map(function (x) { return x.id; });
        },
        enumerable: true,
        configurable: true
    });
    return AboutPicklist;
}());
AboutPicklist = __decorate([
    core_1.Component({
        templateUrl: 'app/about/components/aboutPicklist.html',
        styleUrls: ['app/about/aboutMain.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutPicklist);
exports.AboutPicklist = AboutPicklist;
//# sourceMappingURL=aboutPicklist.js.map
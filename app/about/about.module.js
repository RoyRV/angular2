"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var aboutMain_component_1 = require("./aboutMain.component");
var aboutCheckbox_1 = require("./components/aboutCheckbox");
var aboutDatebox_1 = require("./components/aboutDatebox");
var aboutDropdown_1 = require("./components/aboutDropdown");
var aboutLabel_1 = require("./components/aboutLabel");
var aboutPicklist_1 = require("./components/aboutPicklist");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        declarations: [
            aboutMain_component_1.AboutMainComponent,
            aboutCheckbox_1.AboutCheckbox,
            aboutDatebox_1.AboutDatebox,
            aboutDropdown_1.AboutDropdown,
            aboutLabel_1.AboutLabel,
            aboutPicklist_1.AboutPicklist
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'about', component: aboutMain_component_1.AboutMainComponent },
                { path: 'aboutCheckbox', component: aboutCheckbox_1.AboutCheckbox },
                { path: 'aboutDatebox', component: aboutDatebox_1.AboutDatebox },
                { path: 'aboutDropdown', component: aboutDropdown_1.AboutDropdown },
                { path: 'aboutLabel', component: aboutLabel_1.AboutLabel },
                { path: 'aboutPicklist', component: aboutPicklist_1.AboutPicklist }
            ])
        ],
        providers: []
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map
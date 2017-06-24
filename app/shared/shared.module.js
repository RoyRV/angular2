"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var start_component_1 = require("../shared/start.component");
var my_checkbox_1 = require("../shared/components/my-checkbox");
var my_datebox_1 = require("../shared/components/my-datebox");
var my_dropdown_1 = require("../shared/components/my-dropdown");
var my_label_1 = require("../shared/components/my-label");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            start_component_1.StartComponent,
            my_checkbox_1.MyCheckbox,
            my_datebox_1.MyDatebox,
            my_dropdown_1.MyDropdown,
            my_label_1.MyLabel
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            start_component_1.StartComponent,
            my_checkbox_1.MyCheckbox,
            my_datebox_1.MyDatebox,
            my_dropdown_1.MyDropdown,
            my_label_1.MyLabel
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map
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
var $ = require('node_modules/jquery/dist/jquery.min.js');
var ng2_datepicker_1 = require("ng2-datepicker");
var MyDatebox = (function () {
    function MyDatebox() {
        this.objId = "demo";
        this.name = "demo";
        this.value = "05/28/2017";
        this.format = 'MM/DD/YYYY';
        this.isRequired = false;
        this.isValidDate = true;
    }
    MyDatebox.prototype.ngOnInit = function () {
        this.options = new ng2_datepicker_1.DatePickerOptions();
        // let input = $('#dateboxInput' + this.objId);
        // let self = this;
        // input.datepicker({
        //     autoclose: true,
        //     format: self.format
        // })
    };
    MyDatebox.prototype.openCalendar = function () {
        // let input = $('#dateboxInput' + this.objId);
        // input.datepicker('show');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDatebox.prototype, "objId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDatebox.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDatebox.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDatebox.prototype, "format", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyDatebox.prototype, "isRequired", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyDatebox.prototype, "isValidDate", void 0);
    MyDatebox = __decorate([
        core_1.Component({
            selector: 'my-datebox',
            moduleId: module.id,
            templateUrl: './my-datebox.html',
            styleUrls: ['./my-datebox.css']
        })
    ], MyDatebox);
    return MyDatebox;
}());
exports.MyDatebox = MyDatebox;
//# sourceMappingURL=my-datebox.js.map
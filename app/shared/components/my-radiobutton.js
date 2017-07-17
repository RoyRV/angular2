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
var MyRadioButton = (function () {
    function MyRadioButton() {
        this.valueChange = new core_1.EventEmitter();
    }
    MyRadioButton.prototype.valueChanged = function () {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyRadioButton.prototype, "objId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyRadioButton.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyRadioButton.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyRadioButton.prototype, "class", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MyRadioButton.prototype, "valueChange", void 0);
    MyRadioButton = __decorate([
        core_1.Component({
            selector: 'my-radiobutton',
            moduleId: module.id,
            templateUrl: './my-radiobutton.html',
            styleUrls: ['./my-radiobutton.css']
        }),
        __metadata("design:paramtypes", [])
    ], MyRadioButton);
    return MyRadioButton;
}());
exports.MyRadioButton = MyRadioButton;
//# sourceMappingURL=my-radiobutton.js.map
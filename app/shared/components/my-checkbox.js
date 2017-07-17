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
var MyCheckbox = (function () {
    function MyCheckbox() {
        this.valueChange = new core_1.EventEmitter();
    }
    MyCheckbox.prototype.checked = function () {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyCheckbox.prototype, "objId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyCheckbox.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyCheckbox.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MyCheckbox.prototype, "value", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MyCheckbox.prototype, "valueChange", void 0);
    MyCheckbox = __decorate([
        core_1.Component({
            selector: 'my-checkbox',
            moduleId: module.id,
            templateUrl: './my-checkbox.html',
            styleUrls: ['./my-checkbox.css']
        }),
        __metadata("design:paramtypes", [])
    ], MyCheckbox);
    return MyCheckbox;
}());
exports.MyCheckbox = MyCheckbox;
//# sourceMappingURL=my-checkbox.js.map
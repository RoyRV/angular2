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
var MyPicklist = (function () {
    function MyPicklist() {
        this.class = "";
        this.alignment = "";
        this.selectAll = false;
        this.allChecked = true;
        this.allIndeterminate = true;
        this.allChecked = true;
        this.allIndeterminate = false;
    }
    MyPicklist.prototype.ngOnInit = function () {
        this.setAllChecked();
    };
    MyPicklist.prototype.checkAll = function () {
        var _this = this;
        this.allChecked = !this.allChecked;
        this.allIndeterminate = false;
        this.list.forEach(function (x) { return x.checked = _this.allChecked; });
    };
    MyPicklist.prototype.singleCheck = function (option) {
        option.checked = !option.checked;
        this.setAllChecked();
    };
    MyPicklist.prototype.setAllChecked = function () {
        if (this.selectAll) {
            var allChecked = this.list.filter(function (x) { return x.checked; }).length;
            //in case is 0
            if (allChecked == 0) {
                this.allChecked = false;
                this.allIndeterminate = false;
            }
            else if (allChecked == this.list.length) {
                this.allChecked = true;
                this.allIndeterminate = false;
            }
            else {
                this.allIndeterminate = true;
                this.allChecked = false;
            }
        }
    };
    return MyPicklist;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyPicklist.prototype, "objId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyPicklist.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MyPicklist.prototype, "list", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyPicklist.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyPicklist.prototype, "alignment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MyPicklist.prototype, "selectAll", void 0);
MyPicklist = __decorate([
    core_1.Component({
        selector: 'my-picklist',
        moduleId: module.id,
        templateUrl: './my-picklist.html',
        styleUrls: ['./my-picklist.css', './my-checkbox.css']
    }),
    __metadata("design:paramtypes", [])
], MyPicklist);
exports.MyPicklist = MyPicklist;
//# sourceMappingURL=my-picklist.js.map
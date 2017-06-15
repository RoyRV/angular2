"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var CustomFunctions = (function () {
    function CustomFunctions() {
    }
    CustomFunctions.prototype.isIEexplorer = function () {
        var ieEDGE = navigator.userAgent.match(/Edge/g);
        var ie = navigator.userAgent.match(/.NET/g); // IE 11+
        var oldIE = navigator.userAgent.match(/MSIE/g);
        return (ie || oldIE || ieEDGE);
    };
    CustomFunctions.prototype.isValidDate = function (date, format) {
        if (format === void 0) { format = "MM/DD/YYYY"; }
        return moment(date, format.toUpperCase(), true).isValid();
    };
    return CustomFunctions;
}());
exports.CustomFunctions = CustomFunctions;
//# sourceMappingURL=custom-functions.js.map
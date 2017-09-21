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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    //private _getProductsUrl = "api/products/products.json";
    function ProductService(_http) {
        this._http = _http;
        this._getProductsUrl = "http://localhost:55472/api/product/getall";
        this._getProductByIdUrl = "http://localhost:55472/api/product/getbyid?id=";
        this._addProductdUrl = "http://localhost:55472/api/Product/AddProducto";
        this._updateProductdUrl = "http://localhost:55472/api/Product/UpdateProducto";
        this._deleteProductdUrl = "http://localhost:55472/api/Product/DeleteProducto";
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._getProductsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductById = function (id) {
        var _url = this._getProductByIdUrl + String(id);
        return this._http.get(_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        var req = this._http.post(this._addProductdUrl, product);
        return req.map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product) {
        var req = this._http.post(this._updateProductdUrl, product);
        return req.map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (product) {
        var req = this._http.post(this._deleteProductdUrl, product);
        return req.map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.log("error", error);
        return Observable_1.Observable.throw(error.json().error || "Serve error");
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map
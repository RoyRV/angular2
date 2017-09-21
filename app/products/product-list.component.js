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
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.isAdmin = false;
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.pageTitle = "Product List";
        this.listFilter = '';
        this.errorMessage = "";
    }
    ProductListComponent.prototype.toogleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ProductListComponent.prototype.listar = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        // this.pageTitle = 'Product List '+message;
    };
    ProductListComponent.prototype.addProduct = function () {
        if (!this.isAdmin) {
            alert("No tiene permisos de administrador para agregar un producto");
            return;
        }
        this._router.navigate(['/productAdd']);
    };
    ProductListComponent.prototype.deleteProduct = function (producto) {
        var _this = this;
        var confirmado = confirm("Esta seguro de eliminar?");
        if (confirmado) {
            if (!this.isAdmin) {
                alert("No tiene permisos de administrador para eliminar un producto");
                return;
            }
            var respuesta = this._productService.deleteProduct(producto)
                .subscribe(function (isDeleted) {
                if (isDeleted) {
                    alert("Se eliminó producto");
                    _this.listar();
                }
                else {
                    alert("No se eliminó el producto");
                }
            });
        }
    };
    ProductListComponent.prototype.checked = function () {
        this.isAdmin = !this.isAdmin;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map
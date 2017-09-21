import { Component, OnInit, Output } from '@angular/core';
import { IProduct } from './product';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-add.component.html'
})


export class ProductAddComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;

    ngOnInit(): void {
        this.product = <IProduct>{
            productId: 0,
            description: "",
            price: 0.0,
            imageUrl: "",
            productCode: "",
            productName: "",
        };
    }
    constructor(private _router: Router, private _productService: ProductService) {
    }
    addProduct(): void {
        this._productService.addProduct(this.product)
            .subscribe(
                product => {
                    this.product = product;
                    if (this.product.productId != 0) {
                        alert("Se creó un nuevo producto");
                        this.cancelAdd();
                    }
                    else {
                        alert("Se genero un error");
                    }
                }
            );
    }

    cancelAdd(): void {
        this._router.navigate(['/products']);
    }
}

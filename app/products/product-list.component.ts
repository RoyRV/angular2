import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    isAdmin: boolean = false;
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = "Product List";
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string = "";
    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listar();
    }

    listar() : void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
            );
    }

    onRatingClicked(message: string): void {
        // this.pageTitle = 'Product List '+message;
    }

    addProduct(): void {
        if (!this.isAdmin) {
            alert("No tiene permisos de administrador para agregar un producto");
            return;
        }
        this._router.navigate(['/productAdd']);
    }

    constructor(private _productService: ProductService, private _router: Router) {

    }

    deleteProduct(producto: IProduct): void {
        let confirmado = confirm("Esta seguro de eliminar?");
        if (confirmado) {
            if (!this.isAdmin) {
                alert("No tiene permisos de administrador para eliminar un producto");
                return;
            }
            let respuesta = this._productService.deleteProduct(producto)
            .subscribe(
                isDeleted => {
                    if (isDeleted) {
                        alert("Se eliminó producto"); 
                        this.listar();
                    }
                    else {
                        alert("No se eliminó el producto");
                    }
                }
            );

             
        }
    }

    checked() {
        this.isAdmin = !this.isAdmin;
    }
}
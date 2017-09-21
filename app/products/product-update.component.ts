import { Component, OnInit, OnDestroy } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute , Router} from '@angular/router';
import {ProductService} from './product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl : 'app/products/product-update.component.html'
})

export class ProductUpdateComponent implements OnInit, OnDestroy {
    pageTitle : string ="Product Detail";
    product :  IProduct;
    errorMessage : string = '';
    private sub: Subscription;

    constructor(private _route  : ActivatedRoute,
                private _router: Router,
                private _productService: ProductService){
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += (":"+id);
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProductById(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack() : void{
        this._router.navigate(['/products']);
    }

    updateProduct():void{
        this._productService.updateProduct(this.product)
            .subscribe(
                isUpdated => {
                    if (isUpdated) {
                        alert("Se actualizó producto");
                        this.onBack();
                    }
                    else {
                        alert("No se actualizó el producto");
                    }
                }
            );
    }

    cancelUpdate():void{
        this._router.navigate(['/products']);
    }
}
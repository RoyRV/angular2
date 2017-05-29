import {Component, OnInit } from '@angular/core';
import  {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
    selector : 'pm-products',
    moduleId : module.id,
    templateUrl : 'product-list.component.html',
    styleUrls : ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    showImage : boolean = false;
    imageWidth : number = 50;
    imageMargin : number = 2;
    pageTitle : string = "Product List";
    listFilter : string ='';
    products : IProduct[];
    errorMessage : string = "";
    toogleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
         this._productService.getProducts()
                            .subscribe(
                                products => this.products = products,
                                error => this.errorMessage = <any>error
                            );
    }

    onRatingClicked(message : string) : void {
        this.pageTitle = 'Product List '+message;
    }

    constructor(private _productService : ProductService){
        
    }
}
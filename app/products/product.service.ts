import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _getProductsUrl = "http://localhost:55472/api/product/getall";
    private _getProductByIdUrl = "http://localhost:55472/api/product/getbyid?id=";
    private _addProductdUrl = "http://localhost:55472/api/Product/AddProducto";
    private _updateProductdUrl = "http://localhost:55472/api/Product/UpdateProducto";
    private _deleteProductdUrl = "http://localhost:55472/api/Product/DeleteProducto";
    //private _getProductsUrl = "api/products/products.json";

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._getProductsUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .catch(this.handleError);
    }

    getProductById(id: number): Observable<IProduct> {
        var _url = this._getProductByIdUrl + String(id);
        return this._http.get(_url)
            .map((response: Response) => <IProduct>response.json())
            .catch(this.handleError);
    }

    addProduct(product: IProduct): Observable<IProduct> {
        var req = this._http.post(this._addProductdUrl, product);
        return req.map((response: Response) => <IProduct>response.json())
            .catch(this.handleError);
    }


    updateProduct(product: IProduct): Observable<boolean> {
        var req = this._http.post(this._updateProductdUrl, product);
        return req.map((response: Response) => <boolean>response.json())
            .catch(this.handleError);
    }

    deleteProduct(product: IProduct): Observable<boolean> {
        var req = this._http.post(this._deleteProductdUrl, product);
        return req.map((response: Response) => <boolean>response.json())
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log("error", error);
        return Observable.throw(error.json().error || "Serve error");
    }
}
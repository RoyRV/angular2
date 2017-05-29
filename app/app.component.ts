import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1><br/>
        <div>
            <pm-products></pm-products>
        </div>
    `,
    providers : [ProductService]
})
export class AppComponent { 
    pageTitle : string = 'Roy Test pageTitle';
}

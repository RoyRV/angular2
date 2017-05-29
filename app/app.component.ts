import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <h1>Angular2: Getting Started</h1><br/>
            <pm-products></pm-products>
        </div>
    `,
    providers : [ProductService]
})
export class AppComponent { 
}

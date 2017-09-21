import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductAddComponent } from './product-add.component';
import { ProductUpdateComponent } from './product-update.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        ProductAddComponent,
        ProductUpdateComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                component: ProductDetailComponent,
                canActivate: [ProductDetailGuard]
            },
            { path: 'productAdd', component: ProductAddComponent },
            {
                path: 'productUpdate/:id',
                component: ProductUpdateComponent
            },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {

}
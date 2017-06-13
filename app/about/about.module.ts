import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AboutMainComponent } from './aboutMain.component'; 
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        AboutMainComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'about', component: AboutMainComponent }, 
        ])
    ],
    providers: [ 
    ]
})

export class AboutModule{

}
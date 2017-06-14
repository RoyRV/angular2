import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { AboutMainComponent } from './aboutMain.component'; 
import { AboutCheckbox } from './components/aboutCheckbox';


@NgModule({
    declarations: [
        AboutMainComponent,
        AboutCheckbox
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'about', component: AboutMainComponent },
            { path: 'aboutCheckbox', component: AboutCheckbox }, 
        ])
    ],
    providers: [ 
    ]
})

export class AboutModule{

}
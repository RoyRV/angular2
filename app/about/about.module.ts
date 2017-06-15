import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { AboutMainComponent } from './aboutMain.component'; 
import { AboutCheckbox } from './components/aboutCheckbox';
import { AboutDatebox } from './components/aboutDatebox';
import { AboutDropdown } from './components/aboutDropdown';


@NgModule({
    declarations: [
        AboutMainComponent,
        AboutCheckbox,
        AboutDatebox,
        AboutDropdown
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'about', component: AboutMainComponent },
            { path: 'aboutCheckbox', component: AboutCheckbox }, 
            { path: 'aboutDatebox', component: AboutDatebox }, 
            { path: 'aboutDropdown', component: AboutDropdown }, 
        ])
    ],
    providers: [ 
    ]
})

export class AboutModule{

}
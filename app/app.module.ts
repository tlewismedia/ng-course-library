import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {CourseService} from "./services/course-service";
import ApplicationComponent from './components/application/application';
import HomeComponent from "./components/home/home";

@NgModule({
    imports:      [ BrowserModule,
				    RouterModule.forRoot([
						{path: '',                    component: HomeComponent}
	]) ],
    declarations: [ ApplicationComponent,
                    HomeComponent ],
    providers:    [CourseService,
    				{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
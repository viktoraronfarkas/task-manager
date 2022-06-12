import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { TasksComponent } from './tasks/tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SingleTaskComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditempComponent } from './component/editemp/editemp.component';
import { AddempComponent } from './component/addemp/addemp.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchpipeComponent } from './component/searchpipe/searchpipe.component';
import { SortComponent } from './pipe/sort/sort.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpListComponent,
    EditempComponent,
    AddempComponent,
    SearchPipe,
    SearchpipeComponent,
    SortComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

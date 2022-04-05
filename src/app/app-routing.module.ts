import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './component/addemp/addemp.component';
import { EditempComponent } from './component/editemp/editemp.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { SearchpipeComponent } from './component/searchpipe/searchpipe.component';
import { SortComponent } from './pipe/sort/sort.component';

const routes: Routes = [
  {path:'list', component:EmpListComponent},
  {path:'edit/:id', component:EditempComponent},
  {path:'add', component:AddempComponent},
  {path:'searchpipe',component:SearchpipeComponent},
  {path:'sortpipe',component:SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

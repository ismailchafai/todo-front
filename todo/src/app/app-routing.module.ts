import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './view/todo/todo.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'ajout' , component:TodoComponent},
  {path:'list' , component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

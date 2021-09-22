import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';

const routes: Routes = [
  { path: 'create', component: CreateKittenComponent},
  { path: '', component: ListKittenComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

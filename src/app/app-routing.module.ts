import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { AjaxComponent } from './Component/rxjs/ajax/ajax.component';
import { BindCallbackComponent } from './Component/rxjs/bind-callback/bind-callback.component';
import { DeferComponent } from './Component/rxjs/defer/defer.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ajax', component: AjaxComponent},
  { path: 'bindCallback', component: BindCallbackComponent},
  { path: 'defer', component: DeferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

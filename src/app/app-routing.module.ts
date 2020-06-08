import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { AjaxComponent } from './Component/rxjs/ajax/ajax.component';
import { BindCallbackComponent } from './Component/rxjs/bind-callback/bind-callback.component';
import { DeferComponent } from './Component/rxjs/defer/defer.component';
import { EmptyComponent } from './Component/rxjs/empty/empty.component';
import { FromComponent } from './Component/rxjs/from/from.component';
import { DragObjectComponent } from './Component/rxjs/example/drag-object/drag-object.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'bindCallback', component: BindCallbackComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'from', component: FromComponent },
  { path: 'dragObject', component: DragObjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { AjaxComponent } from './Component/rxjs/ajax/ajax.component';
import { BindCallbackComponent } from './Component/rxjs/bind-callback/bind-callback.component';
import { DeferComponent } from './Component/rxjs/defer/defer.component';
import { EmptyComponent } from './Component/rxjs/empty/empty.component';
import { FromComponent } from './Component/rxjs/from/from.component';
import { DragObjectComponent } from './Component/rxjs/example/drag-object/drag-object.component';
import { AutoCompleteComponent } from './Component/rxjs/example/auto-complete/auto-complete.component';
import { GenerateFibonacciComponent } from './Component/rxjs/example/generate-fibonacci/generate-fibonacci.component';
import { ImageMoveEffectComponent } from './Component/rxjs/example/image-move-effect/image-move-effect.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'bindCallback', component: BindCallbackComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'from', component: FromComponent },
  { path: 'dragObject', component: DragObjectComponent },
  { path: 'autoComplete', component: AutoCompleteComponent },
  { path: 'generateFibonacci', component: GenerateFibonacciComponent },
  { path: 'imageMoveEffect', component: ImageMoveEffectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

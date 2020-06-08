import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { MenuComponent } from './Component/menu/menu.component';
import { AjaxComponent } from './Component/rxjs/ajax/ajax.component';
import { BindCallbackComponent } from './Component/rxjs/bind-callback/bind-callback.component';
import { DeferComponent } from './Component/rxjs/defer/defer.component';
import { EmptyComponent } from './Component/rxjs/empty/empty.component';
import { FromComponent } from './Component/rxjs/from/from.component';
import { DragObjectComponent } from './Component/rxjs/example/drag-object/drag-object.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    AjaxComponent,
    BindCallbackComponent,
    DeferComponent,
    EmptyComponent,
    FromComponent,
    DragObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
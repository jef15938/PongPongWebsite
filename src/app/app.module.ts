import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { MenuComponent } from './Component/menu/menu.component';
import { AjaxComponent } from './Component/rxjs/ajax/ajax.component';
import { BindCallbackComponent } from './Component/rxjs/bind-callback/bind-callback.component';
import { DeferComponent } from './Component/rxjs/defer/defer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    AjaxComponent,
    BindCallbackComponent,
    DeferComponent
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
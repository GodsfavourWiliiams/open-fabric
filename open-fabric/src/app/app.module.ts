import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [AppComponent, ProductsListsComponent, ProductsDetailsComponent, AlertsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

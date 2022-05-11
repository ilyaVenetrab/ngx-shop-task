import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, ProductCardComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

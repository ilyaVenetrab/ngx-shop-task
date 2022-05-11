import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN } from './services/config';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './ngx-shop-routing.module';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/category.service';
import { InterceptorService } from './services/interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrandsService } from './services/brands.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule.forRoot()],
	providers: [
		ProductsService,
		CategoriesService,
		BrandsService,

		{
			provide: BASE_URL_TOKEN,
			useValue: environment.baseUrl,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

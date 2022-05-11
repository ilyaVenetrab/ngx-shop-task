import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReviewPipe } from './one-product-page/pipes/review.pipe';
import { RatePipe } from './one-product-page/pipes/rate.pipe';
import { HeaderComponent } from './one-product-page/header/header.component';
import { FooterComponent } from './one-product-page/footer/footer.component';
import { InformationComponent } from './one-product-page/information/information.component';
import { FeedbacksComponent } from './one-product-page/description/feedbacks/feedbacks.component';
import { StarRatingComponent } from './one-product-page/star-rating/star-rating.component';
import { DescriptionComponent } from './one-product-page/description/description.component';

import { AppComponent } from './app.component';
import { ProductsService } from './services/products/products.service';
import { BASE_URL_TOKEN } from './services/interceptor/config';
import { environment } from '../environments/environment';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ProductComponent } from './one-product-page/one-product-page.component';

describe('[Moдуль 4 - Компонент страницы товара app]', () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				ProductComponent,
				InformationComponent,
				DescriptionComponent,
				StarRatingComponent,
				FeedbacksComponent,
				FooterComponent,
				HeaderComponent,
				RatePipe,
				ReviewPipe,
			],
			imports: [BrowserModule, HttpClientModule],
			providers: [
				ProductsService,
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
		});
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь свойство products c значением null', () => {
		expect((component as any).products).toBeDefined(null);
	});
});

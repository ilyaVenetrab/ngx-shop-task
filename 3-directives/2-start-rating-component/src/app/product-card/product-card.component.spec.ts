import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ReviewPipe } from './pipes/review.pipe';
import { RatePipe } from './pipes/rate.pipe';
import { ImgUrlPipe } from '../../../../../2-pipe/1-transforms-with-pipe/solution/pipes/img-url.pipe';
import { ProductCardComponent } from './product-card.component';
import { oneProduct } from '../../../../../shared/mocks/3-directives/product';

describe('[Moдуль 3 - Компонент рекомендуемого товара]  ', () => {
	let fixture: ComponentFixture<ProductCardComponent>;
	let component: ProductCardComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ProductCardComponent, StarRatingComponent, ImgUrlPipe, RatePipe, ReviewPipe],
		});
		fixture = TestBed.createComponent(ProductCardComponent);
		component = fixture.componentInstance;
	});

	it('компонент "product-card" должен иметь метод redirectTo ', () => {
		expect((component as any).redirectTo).toBeTruthy();
	});

	it('компонент "product-card" должен иметь собственное событие goToProduct ', () => {
		expect((component as any).goToProduct).toBeTruthy();
		expect((component as any).goToProduct).toBeInstanceOf(EventEmitter);
	});

	it('компонент "product-card" должен иметь свойство product c значением {}', () => {
		expect((component as any).product).toBeDefined();
	});

	// tslint:disable-next-line: max-line-length
	it('при нажатии на блок с селектором [.go-to-product] должен вызываться метод  redirectTo и срабатывать собстевнное событие goToProduct', () => {
		spyOn(component as any, 'redirectTo').and.callThrough();
		spyOn((component as any)?.goToProduct, 'emit').and.callThrough();
		const incrementButton = fixture.debugElement.query(By.css('div.go-to-product'));
		incrementButton.triggerEventHandler('click', null);
		expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
		expect((component as any)?.goToProduct.emit).toHaveBeenCalledTimes(1);
	});

	it('тег c селекторор [.card-img-wrap img] должен иметь правильное связывание свойств src и alt', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const imgEl = fixture.debugElement.query(By.css('.card-img-wrap img'));
		expect(imgEl).toBeTruthy();
		const {
			images: [{ url }],
			name,
		} = (component as any)?.product;
		expect(imgEl.attributes['src']).toEqual(url);
		expect(imgEl.attributes['alt']).toEqual(name);
	});

	it('тег с селектором [.card-title]  должен правильно интерполировать свойство name продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.card-title'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual((component as any)?.product.name);
	});

	it('тег с селектором [.rate .rate-amount]  должен правильно интерполировать свойство feedbacksCount продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.rate .rate-amount'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`${(component as any)?.product.feedbacksCount} отзыва`,
		);
	});

	it('тег с селектором [.product-price strong]  должен правильно интерполировать свойство price продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.product-price strong'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`${(component as any)?.product.price}€`,
		);
	});
});

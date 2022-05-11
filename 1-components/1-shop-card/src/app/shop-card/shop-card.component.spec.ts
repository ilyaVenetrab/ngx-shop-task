import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { ShopCardComponent } from './shop-card.component';
import { cartProduct } from '../../../../../shared/mocks/1-components/cart-product';

describe('[Moдуль 1 -  Компонент товара в корзин]', () => {
	let fixture: ComponentFixture<ShopCardComponent>;
	let component: ShopCardComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ShopCardComponent],
		});
		fixture = TestBed.createComponent(ShopCardComponent);
		component = fixture.componentInstance;
	});

	it('компонент "shop-card" должен иметь метод decrementProductInCart ', () => {
		expect((component as any).decrementProductInCart).toBeTruthy();
	});
	it('компонент "shop-card" должен иметь метод incrementProductInCart', () => {
		expect((component as any).incrementProductInCart).toBeTruthy();
	});
	it('компонент "shop-card" должен иметь свойство product c значением {}', () => {
		expect((component as any).product).toBeDefined();
	});

	it('компонент "shop-card" должен иметь cобственное событие increment ', () => {
		expect((component as any).increment).toBeTruthy();
		expect((component as any).increment).toBeInstanceOf(EventEmitter);
	});
	it('компонент "shop-card" должен иметь cобственное событие decrement ', () => {
		expect((component as any).decrement).toBeTruthy();
		expect((component as any).decrement).toBeInstanceOf(EventEmitter);
	});

	it('при нажатии на кнопку с селектором [.increment] должен вызываться метод  incrementProductInCart', () => {
		spyOn(component as any, 'incrementProductInCart').and.callThrough();
		spyOn((component as any)?.increment, 'emit').and.callThrough();
		const incrementButton = fixture.debugElement.query(By.css('button.increment'));
		fixture.detectChanges();
		incrementButton.triggerEventHandler('click', null);
		expect((component as any)?.incrementProductInCart).toHaveBeenCalledTimes(1);
		expect((component as any)?.increment.emit).toHaveBeenCalledTimes(1);
	});

	it('при нажатии на кнопку с селектором [.decrement] должен вызываться метод  decrementProductInCart', () => {
		spyOn(component as any, 'decrementProductInCart').and.callThrough();
		spyOn((component as any)?.decrement, 'emit').and.callThrough();
		const incrementButton = fixture.debugElement.query(By.css('button.decrement'));
		fixture.detectChanges();
		incrementButton.triggerEventHandler('click', null);
		expect((component as any)?.decrementProductInCart).toHaveBeenCalledTimes(1);
		expect((component as any)?.decrement.emit).toHaveBeenCalledTimes(1);
	});

	it('тег c селекторор [.product-img img] должен иметь правильное связывание свойств src и alt', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const imgEl = fixture.debugElement.query(By.css('.product-img img'));
		fixture.detectChanges();
		expect(imgEl).toBeTruthy();
		const { image, name } = (component as any)?.product;
		expect(imgEl.attributes['src']).toEqual(image);
		expect(imgEl.attributes['alt']).toEqual(name);
	});

	it('тег с селектором [.product-desc h4.col-title] должен правильно интерполировать свойство name продукта', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.product-desc h4.col-title'));
		fixture.detectChanges();
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual((component as any)?.product.name);
	});

	it('тег с селектором [.product-desc p.rate-amount]  должен правильно интерполировать свойство feedbacksCount продукта', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.product-desc p.rate-amount'));
		fixture.detectChanges();
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`${(component as any)?.product.feedbacksCount} отзывов`,
		);
	});

	it('тег с селектором [.product-desc span.rate-amount]  должен правильно интерполировать свойство feedbacksCount продукта', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.product-desc span.rate-amount'));
		fixture.detectChanges();
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`${(component as any)?.product.feedbacksCount} отзывов`,
		);
	});

	it('тег с селектором [.product-desc .price-text] strong должен правильно интерполировать  свойство price продукта', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const { price } = (component as any)?.product;
		const priceEl = fixture.debugElement.query(By.css('.product-desc .price-text strong'));
		fixture.detectChanges();
		expect(price).toBeTruthy();
		const priceValue = priceEl.nativeElement.textContent.trim();
		expect(priceValue).toEqual(`€${price.toString()}`);
	});
	it('тег с селектором [.counter__value] должен правильно интерполировать свойство count продукта', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const { count } = (component as any)?.product;
		const counterEl = fixture.debugElement.query(By.css('.counter__value'));
		fixture.detectChanges();
		expect(count).toBeTruthy();
		const countValue = counterEl.nativeElement.textContent.trim();
		expect(countValue.toString()).toEqual(count.toString());
	});

	it('тег с селектором [.price] должен правильно интерполировать результат перемножения cвойств price и count products', () => {
		(component as any).product = cartProduct;
		fixture.detectChanges();
		const { price, count } = (component as any)?.product;
		const totalEl = fixture.debugElement.query(By.css('.price'));
		fixture.detectChanges();
		expect(price).toBeTruthy();
		expect(count).toBeTruthy();
		const totalValue = totalEl.nativeElement.textContent.trim();
		expect(totalValue.toString()).toEqual(`€${price * count}`);
	});
});

import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InformationComponent } from './information.component';
import { oneProduct } from '../../../../../../../shared/mocks/6-routing/product-information';
import { SharedModule } from '../../../shared/shared.module';

describe('[Moдуль 6 - Компонент информации о товаре]', () => {
	let fixture: ComponentFixture<InformationComponent>;
	let component: InformationComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [InformationComponent],
			imports: [SharedModule, RouterTestingModule],
		});
		fixture = TestBed.createComponent(InformationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод addToCart ', () => {
		expect((component as any).addToCart).toBeTruthy();
	});

	it('компонент должен иметь метод show ', () => {
		expect((component as any).show).toBeTruthy();
	});

	it('компонент должен иметь свойство product c значением null', () => {
		expect((component as any).product).toBeDefined();
		expect((component as any).product).toEqual(null);
	});
	it('компонент должен иметь свойство isShow c значением false', () => {
		expect((component as any).isShow).toBeDefined();
		expect((component as any).isShow).toEqual(false);
	});

	it('при нажатии на кнопку с селектором .submit должен вызываться метод  addToCart ', () => {
		(component as any).product = oneProduct;
		spyOn(component as any, 'addToCart').and.callThrough();
		fixture.detectChanges();
		const submitButton = fixture.debugElement.query(By.css('.submit'));
		submitButton.triggerEventHandler('click', null);
		expect((component as any)?.addToCart).toHaveBeenCalledTimes(1);
	});

	// tslint:disable-next-line: max-line-length
	it('при нажатии на кнопку с селектором .show-characters должен вызываться метод show и значение свойства isShow должно быть true', () => {
		expect((component as any).isShow).toBeDefined();
		spyOn(component as any, 'show').and.callThrough();
		fixture.detectChanges();
		const showButton = fixture.debugElement.query(By.css('.show-characters'));
		showButton.triggerEventHandler('click', null);
		expect((component as any)?.show).toHaveBeenCalledTimes(1);
		expect((component as any).isShow).toEqual(true);
	});

	// tslint:disable-next-line: max-line-length
	it('при нажатии на кнопку с селектором .show-characters должна появится кнопка с селектором .hide-characters, при нажатии на нее должен вызываться метод show и значение свойства isShow должно быть false', () => {
		spyOn(component as any, 'show').and.callThrough();
		const showButton = fixture.debugElement.query(By.css('.show-characters'));
		showButton.triggerEventHandler('click', null);
		fixture.detectChanges();
		const hideButton = fixture.debugElement.query(By.css('.hide-characters'));
		expect(hideButton).toBeDefined();
		hideButton.triggerEventHandler('click', null);
		fixture.detectChanges();
		expect((component as any)?.show).toHaveBeenCalledTimes(2);
		expect((component as any).isShow).toEqual(false);
	});

	it('тег с селектором .product-info .product-name  должен правильно интерполировать свойство name продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.product-info .product-name'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual((component as any)?.product.name);
	});

	it('тег с селектором .rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.rate-amount'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`${(component as any)?.product.feedbacksCount} отзыва`,
		);
	});

	it('тег с селектором .price-text  должен правильно интерполировать свойство price продукта', () => {
		(component as any).product = oneProduct;
		fixture.detectChanges();
		const prodNameEL = fixture.debugElement.query(By.css('.price-text'));
		expect(prodNameEL).toBeTruthy();
		expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
			`€${(component as any)?.product.price}.00`,
		);
	});
});

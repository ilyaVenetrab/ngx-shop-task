import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './one-product-page.component';

describe('[Moдуль 4 - Компонент страницы одного товара]', () => {
	let fixture: ComponentFixture<ProductComponent>;
	let component: ProductComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FooterComponent, ProductComponent, HeaderComponent],
		});
		fixture = TestBed.createComponent(ProductComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод goToBasket ', () => {
		expect((component as any).goToBasket).toBeTruthy();
	});

	it('компонент должен иметь свойство product c значением null', () => {
		expect((component as any).product).toBeDefined(null);
	});
});

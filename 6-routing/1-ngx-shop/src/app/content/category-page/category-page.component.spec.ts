import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryPageComponent } from './category-page.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { BrandsComponent } from './brands/brands.component';
import { PriceInputsComponent } from './price-slider/price-inputs/price-inputs.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { SharedModule } from '../../shared/shared.module';

describe('[Moдуль 6 - Компонент страницы категорий]', () => {
	let fixture: ComponentFixture<CategoryPageComponent>;
	let component: CategoryPageComponent;
	const formBuilder: FormBuilder = new FormBuilder();
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				CategoryPageComponent,
				CategoryDropdownComponent,
				PriceSliderComponent,
				BrandsComponent,
				PriceInputsComponent,
			],

			imports: [Ng5SliderModule, RouterTestingModule, HttpClientTestingModule, SharedModule],
			providers: [{ provide: FormBuilder, useValue: formBuilder }],
		});
		fixture = TestBed.createComponent(CategoryPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод getQueryParams ', () => {
		expect((component as any).getQueryParams).toBeTruthy();
	});
	it('компонент должен иметь метод filterByParams ', () => {
		expect((component as any).filterByParams).toBeTruthy();
	});
	it('компонент должен иметь метод subCategorySelect ', () => {
		expect((component as any).subCategorySelect).toBeTruthy();
	});

	it('поле name в форме должно быть валидным', () => {
		const { brands } = component.form.controls;
		expect(brands).toBeTruthy();
		brands.setValue(['101010', '121212']);
		expect(brands).toBeTruthy();
	});

	it('поле telephone в форме должно быть валидным', () => {
		const { text } = component.form.controls;
		expect(text).toBeTruthy();
	});

	it('поле prices в форме должно быть валидным', () => {
		const { prices } = component.form.controls;
		expect(prices).toBeTruthy();
	});
});

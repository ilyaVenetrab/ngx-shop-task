import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { OrderFormComponent } from './order-form.component';

describe('[Moдуль 6 - Компонент формы заказа]', () => {
	let fixture: ComponentFixture<OrderFormComponent>;
	let component: OrderFormComponent;
	const formBuilder: FormBuilder = new FormBuilder();
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OrderFormComponent],
			imports: [SharedModule],
			providers: [{ provide: FormBuilder, useValue: formBuilder }],
		});
		fixture = TestBed.createComponent(OrderFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод submit ', () => {
		expect((component as any).submit).toBeTruthy();
	});
	it('компонент должен иметь метод phoneValidator ', () => {
		expect((component as any).phoneValidator).toBeTruthy();
	});
	it('компонент должен иметь cобственное событие confirm ', () => {
		expect((component as any).confirm).toBeTruthy();
		expect((component as any).confirm).toBeInstanceOf(EventEmitter);
	});
	it('форма должна быть не пустой', () => {
		expect(component.form.valid).toBeTruthy();
	});

	it('поле name в форме должно быть валидным', () => {
		const { name } = component.form.controls;
		expect(name.valid).toBeTruthy();

		name.setValue('');
		expect(name.hasError('required')).toBeTruthy();
	});

	it('поле telephone в форме должно быть валидным', () => {
		const { telephone } = component.form.controls;
		expect(telephone.valid).toBeTruthy();

		telephone.setValue('');
		expect(telephone.hasError('required')).toBeTruthy();

		telephone.setValue('1010101010101');
		expect(telephone.hasError('minLength')).toBeFalsy();
		expect(component.form.get('telephone').value.length).toEqual(13);
	});

	it('поле email в форме должно быть валидным', () => {
		const { email } = component.form.controls;
		expect(email.valid).toBeTruthy();

		email.setValue('');
		expect(email.hasError('required')).toBeTruthy();
	});

	it('поле address в форме должно быть валидным', () => {
		const { address } = component.form.controls;
		expect(address.valid).toBeTruthy();

		address.setValue('');
		expect(address.hasError('required')).toBeTruthy();
	});

	it('при нажатии на кнопку с селектором .submit должен вызываться метод  submit и срабатывать собственное событие confirm', () => {
		const submitButton = fixture.debugElement.query(By.css('.submit'));
		fixture.detectChanges();
		spyOn(component as any, 'submit').and.callThrough();
		spyOn((component as any)?.confirm, 'emit').and.callThrough();
		fixture.detectChanges();
		submitButton.triggerEventHandler('click', null);
		expect((component as any)?.submit).toHaveBeenCalledTimes(1);
		expect((component as any)?.confirm.emit).toHaveBeenCalledTimes(1);
	});
});

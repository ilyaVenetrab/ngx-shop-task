import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-product-description',
	templateUrl: './description.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Output()
	public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

	public isShowDescription: boolean = true;

	public addFeedback(name: string): void {
		this.addFeedbackEvent.emit(name);
	}

	public toggleTab(): void {
		this.isShowDescription = !this.isShowDescription;
	}
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product';

@Component({
	selector: 'ngx-shop-product-card',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Output()
	public goToProduct: EventEmitter<void> = new EventEmitter<void>();

	public redirectTo(): void {
		this.goToProduct.emit();
	}
}

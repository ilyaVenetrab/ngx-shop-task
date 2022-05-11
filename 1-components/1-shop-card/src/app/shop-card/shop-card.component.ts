import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input()
	public product: ICartProduct = {} as ICartProduct;

	@Output()
	public increment: EventEmitter<any> = new EventEmitter<any>();

	@Output()
	public decrement: EventEmitter<any> = new EventEmitter<any>();

	public decrementProductInCart(): void {
		this.decrement.emit();
	}

	public incrementProductInCart(): void {
		this.increment.emit();
	}
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-information',
	templateUrl: './information.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Output()
	public addToCart: EventEmitter<string> = new EventEmitter<string>();

	public isShow = false;

	public show(): void {
		this.isShow = !this.isShow;
	}

	public addToBasket(name: string): void {
		if (name) {
			this.addToCart.emit(`add to card: ${name}`);
		}
	}
}

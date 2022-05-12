import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title: string = 'Компонент информации о товаре';

	public product: IProduct = oneProduct;

	public terminalMessage: string | null = null;

	public addToCart(value: string): void {
		this.terminalMessage = value;
	}
}

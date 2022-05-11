import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/1-components/product';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public product: IProduct = oneProduct;

	public terminalMessage!: string;

	public title = '1. Интерполяция и связывание (Карточка товара cтраницы подкатигории)';

	public addToCart(): void {
		this.terminalMessage = 'товар добавлен в кoрзину';
	}

	public goToProduct(): void {
		this.terminalMessage = 'переход на страницу продукта';
	}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title: string = 'Компонент описания товара и отзывов';

	public product: IProduct = oneProduct;

	public terminalMessage: string | null = null;

	public addFeedback(value: string): void {
		this.terminalMessage = `add feedback for ${value}`;
	}
}

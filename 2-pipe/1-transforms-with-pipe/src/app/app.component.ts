import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/2-pipes/product';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = '2. Pipes';

	public product: IProduct = oneProduct;
}

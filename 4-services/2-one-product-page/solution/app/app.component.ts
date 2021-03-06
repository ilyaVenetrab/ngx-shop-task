import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { ProductsService } from './services/products/products.service';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	public title = 'Компонент страницы продукта';

	public product$: Observable<IProduct> = null;
	constructor(private productsService: ProductsService) {}

	ngOnInit() {
		this.product$ = this.productsService.getProductById('korpus-cougar-gemini-m-385tmb00001-seryj');
	}
}

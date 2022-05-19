import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products/products.service';
import { IProduct } from '../../../../shared/mocks/4-services/product-information';
import { Observable } from 'rxjs';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	public title: string = 'Компонент страницы продукта';

	public constructor(
		private _productsService: ProductsService,
		private _changeDetectorRef: ChangeDetectorRef,
	) {}

	public product: Observable<IProduct> | null = null;

	public ngOnInit() {
		this.product = this._productsService.getProductById(
			'65-165-sm-televizor-led-lg-65um7610-serebristyj',
		);
		this._changeDetectorRef.detectChanges();
	}
}

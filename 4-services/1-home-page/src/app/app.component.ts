import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../shared/mocks/4-services/categories';
import { CategoriesService } from './services/categories/category.service';
import { IProductsResponse } from '../../../../shared/mocks/4-services/products';
import { ProductsService } from './services/products/products.service';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class AppComponent implements OnInit {
	public constructor(
		private _categoriesService: CategoriesService,
		private _productsService: ProductsService,
	) {}

	public title: string = 'Компонент домашней страницы';

	public categories$: Observable<ICategory[]> = this._categoriesService.getCategory();

	public products$: Observable<IProductsResponse> = this._productsService.getProducts();
}

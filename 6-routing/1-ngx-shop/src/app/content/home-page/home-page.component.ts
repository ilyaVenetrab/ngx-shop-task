import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/6-routing/categories';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../../../../../shared/mocks/6-routing/products';

@Component({
	selector: 'ngx-shop-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class HomePageComponent implements OnInit {
	public products$: Observable<IProduct[]> | null = null;

	public categories$: Observable<ICategory[]> | null = null;

	public constructor(
		private productsService: ProductsService,
		private categoriesService: CategoriesService,
	) {}

	public ngOnInit(): void {
		this.getData();
	}

	private getData() {
		this.products$ = this.productsService.getProducts();
		this.categories$ = this.categoriesService.getCategories();
	}
}

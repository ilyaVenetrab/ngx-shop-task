import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/4-services/categories';
@Component({
	selector: 'ngx-shop-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
	@Input()
	public products: any = [];

	@Input()
	public categories: ICategory[] = [];

	public goToBasket(): void {}

	public goToProduct(): void {}

	public redirectTo(_val: string): void {}
}

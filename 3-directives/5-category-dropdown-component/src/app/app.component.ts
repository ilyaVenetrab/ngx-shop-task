import { ChangeDetectionStrategy, Component } from '@angular/core';
import { categories, ICategory } from '../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title: string = 'Компонент выбора категории товара';

	public categories: ICategory[] = categories;

	public terminalMessage: string | null = null;

	public selectSubCategory(subCategory: string) {
		this.terminalMessage = `Переход на категорию товара: ${subCategory}`;
	}
}

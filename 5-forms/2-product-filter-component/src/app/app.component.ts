import { ChangeDetectionStrategy, Component } from '@angular/core';
import { brands } from '../../../../shared/mocks/5-forms/brands.mock';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = 'Компонент фильтрации товаров';

	public brands = brands;

	public terminalMessage = null;

	public confirm(event: FormData) {
		this.terminalMessage = event;
	}
}
